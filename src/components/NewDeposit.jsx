import React, {useEffect, useState} from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import {useLocation, useNavigate} from "react-router-dom";
import DWForm from "./DWForm";
import {getItem} from "../services/LocalStorageService";
import accountService from "../services/accountService";
import {getAgentAccountRq} from "../services/Utils";

const NewDeposit = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0.00);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [account, setAccount] = useState();
    const location = useLocation();
    const [formDetails, setFormDetails] = useState({});
    const [connectedUser, setConnectedUser] = useState();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        const currentAccount = location?.state?.currentAccount;
        setAccount(currentAccount);
        setFormDetails({
            title: "How much do you want to add?",
            availableBalance: currentAccount?.balance,
            currency: currentAccount?.currency,
            pmTitle: "Paying with",
            subTitle: "Add",
            actionTitle: "Continue",
            icon: <AiOutlineArrowRight size={28}/>
        });
        setConnectedUser(getItem('connectedUser'));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const agentAccountRq = getAgentAccountRq(account, connectedUser);
        const agentAccountMin = accountService.getAgentAccountWithMin(agentAccountRq);
        agentAccountMin.then(accountResponse => {
            const depositRq = getDepositRq(accountResponse?.accountId);
            setCanWait(true);
            accountService.deposit(depositRq,callBack).then(
                response => {
                    if (response) {
                        navigate('/client/account/deposit/confirm', {
                            state: {
                                agentAccount: accountResponse,
                                depositRq: depositRq,
                                paymentMethod: paymentMethod,
                                orderId: response
                            }
                        });
                    }
                }
            )
        });
    }


    const getDepositRq = fromAccountId => {
        return {
            fromAccountId: fromAccountId,
            toAccountId: account?.accountId,
            transactionType: "deposit",
            amount: amount,
            rate: 1.00,
            paymentMethod: paymentMethod
        }
    }
    const handleAmountChange = event => {
        const amount = Number(event.target.value);
        setAmount(amount);
    }
    const handlePMChange = event => {
        const pm = event.target.value;
        setPaymentMethod(pm);
    }
    return (
        <DWForm handleSubmit={handleSubmit} canWait={canWait} handlePMChange={handlePMChange} handleAmountChange={handleAmountChange}
                formDetails={formDetails} isDeposit={true}/>
    );
};

export default NewDeposit;