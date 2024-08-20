import React from 'react';
import {roundValue} from "../services/Utils";

const AgentPendingWithdrawCard = ({pendingWithdrawals,handleConfirmWithdraw,handleRejectWithdraw}) => {
    return (
        <div className={"col col-sm-auto col-md-auto col-lg-auto mt-2"}>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">
                        Montant: {roundValue(pendingWithdrawals?.amount)}
                        <mark>{pendingWithdrawals?.currency}</mark>
                    </p>
                    <p className="card-text">
                        Method de paiement: <mark>{pendingWithdrawals?.paymentMethod}</mark>
                    </p>
                    <p className="card-text">
                        Nom du compte du client: {pendingWithdrawals?.ownerName}
                    </p>
                    <p className="card-text">
                        Numéro du compte du client: <mark>{pendingWithdrawals?.clientWalletNumber}</mark>
                    </p>
                    <p className="card-text text-muted">
                        {pendingWithdrawals?.createdAt ? pendingWithdrawals.createdAt : "Pas de date"}
                    </p>
                    <div className={"card-footer"}>
                        <a className="btn btn-primary me-1 mb-2" href={"#"}
                           onClick={() => handleConfirmWithdraw(pendingWithdrawals)}>Confirmer</a>
                        <a className="btn btn-danger mb-2" href={"#"} onClick={() => handleRejectWithdraw(pendingWithdrawals)}>Annuler</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentPendingWithdrawCard;