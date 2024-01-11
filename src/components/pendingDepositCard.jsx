import React from 'react';

const PendingDepositCard = ({pendingDeposit, handleConfirmDeposit, handleCancelDeposit}) => {
    return (
        <div  className={"col col-sm-auto col-md-auto col-lg-auto mt-2"}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Confirm or cancel deposit</h5>
                    <p>
                        Payment method: <mark>{pendingDeposit?.paymentMethod}</mark>
                    </p>
                    <p className="card-text">
                        Amount: <mark>{pendingDeposit?.amount}</mark>
                    </p>
                    <p className="card-text">
                        Currency: <mark>{pendingDeposit?.currency}</mark>
                    </p>
                    <p className="card-text">
                        Agent's number: <mark>{pendingDeposit?.agentWalletNumber}</mark>
                    </p>
                    <p className="card-text">
                        Status: {pendingDeposit?.status}
                    </p>
                    <p className="card-text">
                        Note: {pendingDeposit?.note}
                    </p>
                    <a className="btn btn-primary me-2" onClick={() => handleConfirmDeposit(pendingDeposit)}>Confirm</a>
                    <a className="btn btn-danger" onClick={() => handleCancelDeposit(pendingDeposit)}>Cancel</a>
                </div>
            </div>
        </div>
    );
};

export default PendingDepositCard;