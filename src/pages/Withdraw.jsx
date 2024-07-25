import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import DWForm from "../components/DWForm";
import {useLocation, useNavigate} from "react-router-dom";
import {AiOutlineArrowDown, AiOutlineArrowRight} from "react-icons/ai";
import ConfirmWithdrawModal from "../modals/ConfirmWithdrawModal";
import {getItem} from "../services/LocalStorageService";
import accountService from "../services/accountService";
import {getAgentAccountRq, printError} from "../services/Utils";

const Withdraw = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState(0.00);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [account, setAccount] = useState();
    const [withdrawDetails, setWithdrawDetails] = useState(null);
    const [connectedUser, setConnectedUser] = useState();
    const [formDetails, setFormDetails] = useState();
    const location = useLocation();
    const [toAccount, setToAccount] = useState();
    const [canWithdraw, setCanWithdraw] = useState(true)

    useEffect(() => {
        const currentAccount = location?.state?.currentAccount;
        setAccount(currentAccount);
        setFormDetails({
            title: "How much do you want to withdraw?",
            availableBalance: currentAccount?.balance,
            currency: currentAccount?.currency,
            pmTitle: "Receiving via",
            subTitle: "Withdraw",
            actionTitle: "Withdraw",
            icon: <AiOutlineArrowRight size={28}/>
        });
        setConnectedUser(getItem('connectedUser'));
    }, [showModal]);

    const handelModal = () => {
        setShowModal(!showModal);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        accountService.canWithdraw(account?.accountId, amount)
            .then(response => {
                    if (response) {
                        const agentAccountRq = getAgentAccountRq(account, connectedUser);
                        const agentAccountMax = accountService.getAgentAccountWithMax(agentAccountRq);
                        agentAccountMax.then(accountResponse => {
                            const withdrawRq = getWithdrawRq(accountResponse?.accountId);
                            setWithdrawDetails({
                                withdrawRq: withdrawRq,
                                amount: amount,
                                paymentMethod: paymentMethod,
                                currency: accountResponse?.currency,
                                participantId: connectedUser?.userId
                            })
                            handelModal();
                        })
                    } else {
                        setCanWithdraw(false);
                    }
                }
            ).catch(error => {
            printError(error);
        })
    }

    const getWithdrawRq = toAgentAccountId => {
        return {
            fromAccountId: account?.accountId,
            toAccountId: toAgentAccountId,
            transactionType: "withdraw",
            amount: amount,
            rate: 1.00,
            paymentMethod: paymentMethod
        }
    }
    const handleAmountChange = event => {
        const amount = Number(event.target.value);
        setAmount(amount);
        if (!canWithdraw) {
            setCanWithdraw(true);
        }
    }
    const handlePMChange = event => {
        const pm = event.target.value
        setPaymentMethod(pm);
    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Withdraw money"}/>
            <DWForm formDetails={formDetails} handleAmountChange={handleAmountChange} handlePMChange={handlePMChange}
                    handleSubmit={handleSubmit} isDeposit={false}/>
            {
                !canWithdraw &&
                <div className={"col-md-8 mx-auto d-flex justify-content-center mt-5"}>
                    <h5 className={"text-danger"}>Insufficient balance</h5>
                </div>
            }
            {withdrawDetails &&
                <ConfirmWithdrawModal showModal={showModal} handleModal={handelModal}
                                      withdrawDetails={withdrawDetails}/>
            }

        </div>
    );
};

export default Withdraw;