import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import LogoutBtn from "../components/LogoutBtn";
import accountService from "../services/accountService";
import {roundValue} from "../services/Utils";

const AgentBalanceItem = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [account, setAccount] = useState(location.state?.selectedAccount);
    const [fundingAccount, setFundingAccount] = useState();
    useEffect(() => {
        const fundingAccountResponse = accountService.getFundingAccount(account?.accountId);
        fundingAccountResponse.then(fundingAccount => setFundingAccount(fundingAccount));
    }, []);

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-start"}>
                    <button className={"btn btn-info"} onClick={() => {
                        navigate("/agent/account")
                    }}><span><i><BiArrowBack size={28}/></i></span> Back
                    </button>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            <div className={"row mt-5"}>
                <div className={"col-lg-4"}>
                    <h4>{account?.currency?.code} {account?.accountType?.accountType} balance</h4>
                    <h1>{roundValue(account?.balance)} {account?.currency?.symbol}</h1>
                </div>
            </div>
            <hr/>
            {fundingAccount && <div className={"col-lg-4"}>
                <h4>{fundingAccount?.currency?.code} {fundingAccount?.accountType?.accountType} balance</h4>
                <h1>{roundValue(fundingAccount?.balance)} {fundingAccount?.currency?.symbol}</h1>
            </div>}
        </div>
    );
};

export default AgentBalanceItem;