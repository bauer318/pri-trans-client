import React, {useState} from 'react';
import {handleCopyText, printError, timeAgo} from "../services/Utils";
import ToAddPersonalInfoModal from "../modals/ToAddPersonalInfoModal";
import manualTransferService from "../services/ManualTransferService";
import {MdOutlineContentCopy} from "react-icons/md";
import ToastNotification from "../modals/toastNotification";
import {getItem} from "../services/LocalStorageService";
import MustConnectToContinueModal from "./MustConnectToContinueModal";

const ManualTransferCard = ({transfer, isVerified}) => {
    const [showModal, setShowModal] = useState(false);
    const [showConnexionModal, setShowConnexionModal] = useState(false);
    const [senderPhone, setSenderPhone] = useState(transfer?.senderPhone);
    const [senderPhoneDisplayed, setSenderPhoneDisplayed] = useState(false);
    const [copied, setCopied] = useState(false);
    const connectedUser = getItem('connectedUser');
    const handleModal = () => {
        setShowModal(!showModal);
    }
    const handleConnexionModal = () => {
        setShowConnexionModal(!showConnexionModal);
    }
    const handleShowSenderPhoneOnClick = () => {
        if (connectedUser) {
            if (isVerified) {
                manualTransferService.getSenderPhone(transfer?.id).then(
                    response => {
                        setSenderPhone(response);
                        setSenderPhoneDisplayed(true);
                    }
                ).catch(error => {
                    printError(error);
                })
            } else {
                handleModal();
            }
        } else {
            handleConnexionModal();
        }

    }
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{transfer?.amount}{transfer?.currency}, {transfer?.senderName}
                    </h5>
                    <p className="card-text">{transfer?.destination}</p>
                    <hr/>
                    <p className="d-flex justify-content-between w-100">
                        <span>{senderPhone}</span>
                        {senderPhoneDisplayed ? <i
                            onClick={() => handleCopyText(senderPhone, setCopied)}>{
                            <MdOutlineContentCopy/>}</i> : <span><button className={"btn btn-secondary"}
                                                                         onClick={handleShowSenderPhoneOnClick}><span
                            className={"text-light"}><i>Afficher</i></span></button></span>}


                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{timeAgo(transfer?.createdAt)}</small>
                </div>
            </div>
            {showModal && <ToAddPersonalInfoModal handleModal={handleModal} showModal={showModal}/>}
            {copied && <ToastNotification message={"Le numéro a été copié"}/>}
            {showConnexionModal &&
                <MustConnectToContinueModal handleModal={handleConnexionModal} showModal={showConnexionModal}/>}
        </div>
    );
};

export default ManualTransferCard;