import React from 'react';

const AgentPendingWithdrawCard = ({pendingWithdrawals,handleConfirmWithdraw,handleRejectWithdraw}) => {
    return (
        <div className={"col col-sm-auto col-md-auto col-lg-auto mt-2"}>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">
                        Amount: {pendingWithdrawals?.amount}
                        <mark>{pendingWithdrawals?.currency}</mark>
                    </p>
                    <p className="card-text">
                        Payment method: <mark>{pendingWithdrawals?.paymentMethod}</mark>
                    </p>
                    <p className="card-text">
                        Client wallet's name: {pendingWithdrawals?.ownerName}
                    </p>
                    <p className="card-text">
                        Client wallet's number: <mark>{pendingWithdrawals?.clientWalletNumber}</mark>
                    </p>
                    <p className="card-text text-muted">
                        {pendingWithdrawals?.createdAt ? pendingWithdrawals.createdAt : "No date"}
                    </p>
                    <div className={"card-footer"}>
                        <a className="btn btn-primary me-1 mb-2"
                           onClick={() => handleConfirmWithdraw(pendingWithdrawals)}>Confirm</a>
                        <a className="btn btn-danger mb-2" onClick={() => handleRejectWithdraw(pendingWithdrawals)}>Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentPendingWithdrawCard;