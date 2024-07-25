import React from 'react';
import DepositHeader from "../components/DepositHeader";
import NewDeposit from "../components/NewDeposit";

const Deposit = () => {
    return (
        <div className={"container"}>
            <DepositHeader/>
            <NewDeposit/>
        </div>
    );
};

export default Deposit;