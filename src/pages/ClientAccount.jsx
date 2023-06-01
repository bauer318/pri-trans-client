import React from 'react';
import AccountHeader from "../components/AccountHeader";
import BalanceCard from "../components/BalanceCard";

const ClientAccount = () => {
    return (
        <div className={"container"}>
            <AccountHeader/>
            <h2 className={"mt-2"}>Account</h2>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                <BalanceCard balance={82.82} currency={"US Dollar"} symbol={"$"}/>
                <BalanceCard balance={20.14} currency={"Euro"} symbol={"£"}/>
                <BalanceCard balance={"1000.00"} currency={"Russian Ruble"} symbol={"₽"}/>
            </div>
        </div>
    );
};

export default ClientAccount;