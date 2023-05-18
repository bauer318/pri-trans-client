import React, {useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import DWForm from "../components/DWForm";
import {useNavigate} from "react-router-dom";
import {AiOutlineArrowDown} from "react-icons/ai";
import ConfirmWithdrawModal from "../modals/ConfirmWithdrawModal";

const Withdraw = () => {
    console.log('withdraw');
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState(0.00);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [withdrawDetails, setWithdrawDetails] = useState(null);
    const [formDetails, setFormDetails] = useState(
        {
            title: "How much do you want to withdraw?",
            availableBalance: 23,
            currency: "USD",
            pmTitle: "Receiving via",
            subTitle: "Withdraw",
            actionTitle: "Withdraw",
            icon: <AiOutlineArrowDown size={28}/>
        }
    );

    const handelModal = ()=>{
        setShowModal(!showModal);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //To server
        console.log(amount);
        console.log(paymentMethod);
        setWithdrawDetails({
            amount:amount,
            paymentMethod:{
                paymentMethod:"Sberbank",
                number:"2458-895"
            }
        })
        handelModal();
    }
    const handleAmountChange = event => {
        const amount = Number(event.target.value);
        setAmount(amount);
    }
    const handlePMChange = event => {
        const pm = Number(event.target.value);
        setPaymentMethod(pm);
    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Withdraw money"}/>
            <DWForm formDetails={formDetails} handleAmountChange={handleAmountChange} handlePMChange={handlePMChange}
                    handleSubmit={handleSubmit}/>
            { withdrawDetails &&
                <ConfirmWithdrawModal showModal={showModal} handleModal={handelModal} withdrawDetails={withdrawDetails}/>
            }

        </div>
    );
};

export default Withdraw;