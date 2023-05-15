import React from 'react';
import LogoutBtn from "../components/LogoutBtn";
import PendingDeposit from "../components/PendingDeposit";

const DepositConfirm = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <h2>Confirm deposit</h2>
                </div>
                <div className={"col-lg-9 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            <PendingDeposit/>
        </div>
    );
};

export default DepositConfirm;