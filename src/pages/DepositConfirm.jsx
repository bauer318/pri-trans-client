import React from 'react';
import LogoutBtn from "../components/LogoutBtn";
import PendingDeposit from "../components/PendingDeposit";
import {useLocation} from "react-router-dom";

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