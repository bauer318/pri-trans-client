import React, {useState} from 'react';
import {handleCopyText, roundValue} from "../services/Utils";
import {MdOutlineContentCopy} from "react-icons/md";
import ToastNotification from "../modals/toastNotification";

const PendingDepositCard = ({pendingDeposit, handleConfirmDeposit, handleCancelDeposit}) => {
    const [copied, setCopied] = useState(false);

    return (
        <div className={"col col-sm-auto col-md-auto col-lg-auto mt-2"}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Confirmer ou annuler le dépôt</h5>
                    <p>
                        Methode de paiement: <mark>{pendingDeposit?.paymentMethod}</mark>
                    </p>
                    <p className="card-text">
                        Montant: <mark>{roundValue(pendingDeposit?.amount)}</mark>
                    </p>
                    <p className="card-text">
                        Monnaie: <mark>{pendingDeposit?.currency}</mark>
                    </p>
                    <p className="card-text">
                        Numéro de l'agent: <mark>{pendingDeposit?.agentWalletNumber}</mark> <i
                        onClick={() => handleCopyText(pendingDeposit?.agentWalletNumber,setCopied)}>Copy {
                        <MdOutlineContentCopy/>}</i>
                    </p>
                    <p className="card-text">
                        Status: {pendingDeposit?.status}
                    </p>
                    <p className="card-text">
                        Note: {pendingDeposit?.note}
                    </p>
                    <a className="btn btn-primary me-2"
                       onClick={() => handleConfirmDeposit(pendingDeposit)}>Confirmer</a>
                    <a className="btn btn-danger" onClick={() => handleCancelDeposit(pendingDeposit)}>Annuler</a>
                </div>
            </div>
            {copied && <ToastNotification message={"Le numéro de l'agent a été copié"}/>}
        </div>
    );
};

export default PendingDepositCard;