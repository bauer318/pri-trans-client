import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {Form} from "react-bootstrap";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useSelector} from "react-redux";
import SendModal from "../modals/SendModal";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {baseURL, getToken, printError} from "../services/Utils";
import currencyService from "../services/CurrencyService";

const SendTo = () => {
    const [showModal, setShowModal] = useState(false);
    const [recipientEmail, setRecipientEmail] = useState();
    const sendDetails = useSelector(state => state.send);
    const navigate = useNavigate();
    const handleModal = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        console.log(sendDetails);
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`${baseURL}/users/from-different-country/${recipientEmail}`, {headers: getToken()})
            .then(response => {
                if(response.data){
                   currencyService.findCurrencyByName(sendDetails?.toCurrencyName).then(
                        response=>{
                            const accountRq ={
                                currency:response,
                                accountType:"main"
                            }
                        }
                    )

                }
            }).catch(error => {
            printError(error);
        })
        if (sendDetails.toCurrency) {
            handleModal();
        } else {
            navigate('/client/account/send');
        }
    }
    const handleRecipientEmailChange = event => {
        const recipientEmail = event.target.value;
        setRecipientEmail(recipientEmail);
    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Send money"}/>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                <Form onSubmit={handleSubmit}>
                    <h3>Who are you sending money to?</h3>
                    <Form.Group>
                        <Form.Control
                            type={"email"}
                            required={true}
                            placeholder={"recipient's account email"}
                            onChange={handleRecipientEmailChange}
                        />
                    </Form.Group>
                    <button className={"btn btn-primary mt-2"} type={"submit"}>Continue<span
                        className={"ms-2"}><i><AiOutlineArrowRight size={28}/></i></span>
                    </button>
                </Form>
            </div>
            {recipientEmail && sendDetails.toCurrency &&
                <SendModal handleModal={handleModal} showModal={showModal} recipientEmail={recipientEmail}/>
            }
        </div>
    );
};

export default SendTo;
