import React from 'react';
import {roundValue} from "../services/Utils";

const AgentPendingDepositCard = ({pendingDeposit, handleConfirmDeposit, handleCancelDeposit}) => {
    return (
        <div className={"col col-sm-auto col-md-auto col-lg-auto mt-2"}>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">
                        Montant: {roundValue(pendingDeposit?.amount)}
                        <mark>{pendingDeposit?.currency}</mark>
                    </p>
                    <p className="card-text">
                        Montant de paiement: <mark>{pendingDeposit?.paymentMethod}</mark>
                    </p>
                    <p className="card-text">
                        Client: {pendingDeposit?.ownerName}
                    </p>
                    <p className="card-text">
                        Référence: {pendingDeposit?.reference === "" ? "Pas ref" : pendingDeposit.reference}
                    </p>
                    <p className="card-text text-muted">
                        {pendingDeposit?.createdAt ? pendingDeposit.createdAt : "Pas de date"}
                    </p>
                    <div className={"card-footer"}>
                        <a className="btn btn-primary me-1 mb-2"
                           onClick={() => handleConfirmDeposit(pendingDeposit)}>Confirmer</a>
                        <a className="btn btn-danger mb-2" onClick={() => handleCancelDeposit(pendingDeposit)}>Annuler</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentPendingDepositCard;