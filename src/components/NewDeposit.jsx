import React, {useState} from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import DWForm from "./DWForm";

const NewDeposit = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0.00);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [formDetails, setFormDetails] = useState(
        {
            title:"How much do you want to add?",
            availableBalance:23,
            currency:"USD",
            pmTitle:"Paying with",
            subTitle:"Add",
            actionTitle:"Continue",
            icon:<AiOutlineArrowRight size={28} />
        }
    );
    const handleSubmit = (event) => {
        event.preventDefault();
        //To server
        console.log(amount);
        console.log(paymentMethod);
        navigate('/client/account/1/deposit/confirm');
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
        <DWForm handleSubmit={handleSubmit} handlePMChange={handlePMChange} handleAmountChange={handleAmountChange}
                formDetails={formDetails}/>
    );
};

export default NewDeposit;