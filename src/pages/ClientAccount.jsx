import React from 'react';
import AccountHeader from "../components/AccountHeader";
import BalanceCard from "../components/BalanceCard";

const ClientAccount = () => {
    return (
        <div className={"container"}>
            <AccountHeader/>
            <h2 className={"mt-2"}>Account</h2>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                <BalanceCard />
                <BalanceCard />
                <BalanceCard />
            </div>
        </div>
    );
};

export default ClientAccount;