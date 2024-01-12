import React, {useEffect, useState} from 'react';
import LogoutBtn from "../components/LogoutBtn";
import {BiArrowBack} from "react-icons/bi";
import {useLocation, useNavigate} from "react-router-dom";
import {AiOutlineArrowDown, AiOutlineArrowUp, AiOutlinePlus} from "react-icons/ai";
import CircleBtn from "../components/CircleBtn";
import {TbArrowsExchange2} from "react-icons/tb";
import accountService from "../services/accountService";
import {printError, roundValue} from "../services/Utils";
import LoadingEffect from "../components/LoadingEffect";

const BalanceItem = () => {
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
            callBack();
            printError(error);
        });
    }, []);

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-start"}>
                    <button className={"btn btn-info"} onClick={() => {
                        navigate("/client/account")
                    }}><span><i><BiArrowBack size={28}/></i></span> Back
                    </button>
                </div>
            </div>
            {account && <div className={"row mt-5"}>
                <div className={"col-lg-4"}>
                    <h4>{account?.currency?.code} {account?.accountType?.accountType} balance</h4>
                    <h1>{roundValue(account?.balance)} {account?.currency?.symbol}</h1>
                </div>
                <CircleBtn onClick={() => navigate("/client/account/deposit/new", {state: {currentAccount: account}})}
                           icon={<AiOutlinePlus size={28}/>}
                           content={"Deposit"}/>
                {/*<CircleBtn  onClick={() => navigate("/client/account/convert",{state:{currentAccount:account}})} icon={<TbArrowsExchange2 size={28}/>}
                           content={"Convert"}/>*/}
                <CircleBtn onClick={() => navigate("/client/account/send", {state: {currentAccount: account}})}
                           icon={<AiOutlineArrowUp size={28}/>}
                           content={"Send"}/>
                <CircleBtn onClick={() => navigate("/client/account/withdraw", {state: {currentAccount: account}})}
                           icon={<AiOutlineArrowDown size={28}/>}
                           content={"Withdraw"}/>
            </div>}

            <hr/>
            {fundingAccount && <div className={"col-lg-4"}>
                <h4>{fundingAccount?.currency?.code} {fundingAccount?.accountType?.accountType} balance</h4>
                <h1>{roundValue(fundingAccount?.balance)} {fundingAccount?.currency?.symbol}</h1>
            </div>}
            {
                canWait && <div className={"text-center"}><LoadingEffect/></div>
            }

        </div>
    );
};

export default BalanceItem;