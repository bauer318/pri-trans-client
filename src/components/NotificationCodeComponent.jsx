import React, {useEffect, useState} from 'react';
import {FaRegCopy, FaRobot} from "react-icons/fa";
import {getItem, removeItem} from "../services/LocalStorageService";
import TimerComponent from "./TimerComponent";
import telegramNotificationService from "../services/TelegramNotificationService";
import {handleCopyText, isExpiredCode, printError, toBotTelegramOnClick} from "../services/Utils";
import SubscribeFailedModal from "../modals/SubscribeFailedModal";
import ToastNotification from "../modals/toastNotification";
import LoadingEffect from "./LoadingEffect";

const NotificationCodeComponent = ({title, infos, code, regenerateCode, isSubscribeCase, handleRefreshPage}) => {
    const [canWait, setCanWait] = useState(false);
    const [canGoToTelegramBot, setCanGoToTelegramBot] = useState(true);
    const [canRegenerateCode, setCanRegenerateCode] = useState(false);
    const [codeResponse, setCodeResponse] = useState();
    const [printMessage, setPrintMessage] = useState(true);
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [canWaitConfirmation, setCanWaitConfirmation] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        if (code) {
            setCanWait(true);
            telegramNotificationService.getCodeByCodeStr(code).then(data => {
                setCodeResponse(data);
                setCanWait(false);
                setCanRegenerateCode(isExpiredCode(data?.expireAt));
            }).catch(error => {
                setCanWait(false);
                printError(error);
            })
            setPrintMessage(false);
        }

    }, [code]);


    const confirmCodeOnClick = () => {
        setPrintMessage(false);
        setCanWaitConfirmation(true);
        if (isSubscribeCase) {
            telegramNotificationService.subscribe().then(response => {
                if (response) {
                    processAfterSubscribeOrUnsubscribe();
                } else {
                    setShowModal(true);
                }
                setCanWaitConfirmation(false);
            }).catch(error => {
                handleErrorAfterSubscribeOrUnsubscribe(error);
            })
        } else {
            telegramNotificationService.unsubscribe().then(response => {
                if (response) {
                    processAfterSubscribeOrUnsubscribe();
                } else {
                    setShowModal(true);
                }
                setCanWaitConfirmation(false);
            }).catch(error => {
                handleErrorAfterSubscribeOrUnsubscribe(error);
            })
        }

    }
    const callBack = () => {
        setCanRegenerateCode(true);
    }

    const processAfterSubscribeOrUnsubscribe = () => {
        setCanGoToTelegramBot(true);
        removeItem("pendingCode");
        setMessage(isSubscribeCase ? "Inscription réussie" : "Désinscription réussie");
        setPrintMessage(true);
        handleRefreshPage();
    }

    const handleErrorAfterSubscribeOrUnsubscribe = (error) => {
        if (error?.response?.status === 503) {
            setShowModal(true);
        } else {
            printError(error);
        }
        setCanWaitConfirmation(false);
    }

    const newCodeOnClick = () => {
        regenerateCode();
        setCanGoToTelegramBot(true);
        setCanRegenerateCode(false);
    }

    const handleCopyCodeOnClick = (code) => {
        setMessage("Le code à été copié! Envoyez-le svp sur le bot telegram");
        handleCopyText(code, setPrintMessage);
    }

    return (
        <>
            <div className="row mt-3 text-center">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{infos}</p>
                            <hr/>
                            {code?.length > 0 && <>
                                <p className={"text-info"}>{code} <i className={"ms-3"}><FaRegCopy
                                    onClick={() => handleCopyCodeOnClick(code)}/></i></p>
                                <div className={"d-flex justify-content-between"}>
                                    {canGoToTelegramBot &&
                                        <a href="https://t.me/PriTransBot" target={"_blank"} rel={"noopener noreferrer"}
                                           className="btn btn-secondary btn-sm"
                                           onClick={() => toBotTelegramOnClick(code, setCanGoToTelegramBot)}> <span
                                            className="d-none d-md-inline"> Bot telegram</span> <span><FaRobot
                                            size={20}/></span></a>}
                                    {canWait ? "Loading..." : <button className={"btn btn-primary btn-sm"}
                                                                      disabled={!canRegenerateCode}
                                                                      onClick={newCodeOnClick}>{canRegenerateCode ? "Nouveau code" :
                                        <TimerComponent
                                            expireAt={codeResponse?.expireAt}
                                            callBack={callBack}
                                        />}</button>}

                                </div>
                            </>}
                        </div>
                    </div>
                    <button className={"btn btn-primary mt-3"}
                            disabled={(getItem('pendingCode') == null && canGoToTelegramBot) || canWaitConfirmation}
                            onClick={confirmCodeOnClick}>Confirmer
                    </button>
                </div>
                {canWaitConfirmation && <LoadingEffect/>}
            </div>
            {showModal && <SubscribeFailedModal showModal={showModal} handleModal={handleModal}
                                                isSubscription={isSubscribeCase}/>}
            {printMessage && <ToastNotification message={message}/>}
        </>
    );
};

export default NotificationCodeComponent;