import React, {useEffect, useState} from 'react';
import telegramNotificationService from "../services/TelegramNotificationService";
import {getItem, saveItem} from "../services/LocalStorageService";
import LoadingEffect from "../components/LoadingEffect";
import {printError} from "../services/Utils";
import NotificationCodeComponent from "../components/NotificationCodeComponent";
import {FaRobot} from "react-icons/fa";

const Notifications = () => {
    const [canProcess, setCanProcess] = useState(getItem('pendingCode')?.code != null);
    const [generatedCode, setGeneratedCode] = useState();
    const [canWait, setCanWait] = useState(true);
    const [isSubscribedUser, setIsSubscribedUser] = useState(false);
    const [canWaitCode, setCanWaitCode] = useState(false);
    const [canSubscribe, setCanSubscribe] = useState(getItem('pendingCode')?.code == null);
    const [isSubscribeCase, setIsSubscribeCase] = useState(false);
    const [refreshPage, setRefreshPage] = useState(false);

    useEffect(() => {
        const username = getItem('connectedUser')?.email;
        telegramNotificationService.isSubscribedUser(username).then(
            response => {
                setIsSubscribedUser(response);
                telegramNotificationService.getCodeByUsername(username).then(codeData => {
                    if (codeData && !codeData?.usedCode) {
                        console.log('getting');
                        setCanSubscribe(false);
                        saveItem('pendingCode', {code: codeData?.fullCode});
                        setGeneratedCode(codeData?.fullCode);
                        setCanProcess(true);
                    }
                    setCanWait(false);
                }).catch(error => {
                    setCanWait(false);
                    printError(error);
                })

            }
        ).catch(error => {
            printError(error);
            setCanWait(false);
        });
        const pendingCode = getItem('pendingCode');
        if (pendingCode?.code) {
            setGeneratedCode(pendingCode.code);
            setCanSubscribe(false);
        }
    }, [refreshPage]);

    useEffect(() => {

    }, [generatedCode]);

    const handleResetPage = () => {
        setRefreshPage(!refreshPage);
        setCanProcess(getItem('pendingCode')?.code != null);
        setCanSubscribe(getItem('pendingCode')?.code == null);
    }

    const generateCode = (isSubscriptionAction) => {
        setCanWaitCode(true);
        telegramNotificationService.generateCode().then(code => {
            setGeneratedCode(code);
            setCanProcess(true);
            setCanWaitCode(false);
            setCanSubscribe(false);
            setIsSubscribeCase(isSubscriptionAction);
            const pendingCode = {
                code: code
            }
            saveItem("pendingCode", pendingCode);
        }).catch(error => {
            setCanWaitCode(false);
            printError(error);
        })
    }

    const handleSubscribeOnClick = () => {
        generateCode(true);
    }

    const handleUnsubscribeOnClick = () => {
        generateCode(false);
    }

    return (
        <div className={"container"}>
            <h4>Les notifications</h4>
            <hr/>
            {isSubscribedUser ?
                <p><span className={"text-primary"}>Vous êtes inscrit</span> sur notre <a
                    href="https://t.me/PriTransBot" target={"_blank"} rel={"noopener noreferrer"}>bot
                    telegram <span><FaRobot size={20}/></span></a> et vous recevez toutes les notifications utiles.
                </p> :
                <p>Recevoir des informations utiles en temps réel , ainsi que des notifications sur les demandes des
                    transferts et
                    autres via notre bot telegram.</p>}
            {canWait ? <LoadingEffect/> : <>
                {!isSubscribedUser && !canProcess && <p>Vous devez vous inscrire au bot telegram</p>}
                <div className={"row"}>
                    <div className={"col"}>
                        {isSubscribedUser ?
                            <button className={"btn btn-danger"}
                                    disabled={canWaitCode || !canSubscribe}
                                    onClick={handleUnsubscribeOnClick}>{canWaitCode ? "Generating code..." : "Se désinscrire"}</button> :
                            <button className={"btn btn-primary"}
                                    disabled={canWaitCode || !canSubscribe}
                                    onClick={handleSubscribeOnClick}>{canWaitCode ? "Generating code..." : "S'inscrire"}
                            </button>}
                    </div>
                </div>
            </>}
            {canProcess && !canSubscribe &&
                <NotificationCodeComponent code={generatedCode} title={"Code à usage unique"}
                                           infos={"Copier ce code à usage unique et envoyer le sur le bot telegram." +
                                               " Après avoir envoyé le code, Veuillez appuyer sur le bouton Confirmer pour " +
                                               "finir cette opération."}
                                           regenerateCode={handleSubscribeOnClick}
                                           isSubscribeCase={isSubscribeCase}
                                           handleRefreshPage={handleResetPage}/>}
        </div>
    );
};

export default Notifications;