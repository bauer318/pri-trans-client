import React from 'react';
import PendingDeposit from "../components/PendingDeposit";

const DepositConfirm = () => {
    return (
        <div>
            <div className={"row"}>
                <div  className={"col col-sm-auto col-md-auto col-lg-6"}>
                    <h2>Confirm deposit</h2>
                </div>
            </div>
            <PendingDeposit/>
        </div>
    );
};

export default DepositConfirm;