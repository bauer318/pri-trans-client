import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import LogoutBtn from "../components/LogoutBtn";
import accountService from "../services/accountService";
import {printError, roundValue} from "../services/Utils";
import LoadingEffect from "../components/LoadingEffect";

const AgentBalanceItem = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [account, setAccount] = useState(location.state?.selectedAccount);
    const [fundingAccount, setFundingAccount] = useState();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        const fundingAccountResponse = accountService.getFundingAccount(account?.accountId);
        setCanWait(true);
        fundingAccountResponse.then(fundingAccount => {
            setFundingAccount(fundingAccount);
            callBack();
        }).catch(error => {
            printError(error);
            callBack();
        });
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
            {canWait && <div className={"text-center"}><LoadingEffect/></div>}
        </div>
    );
};

export default AgentBalanceItem;