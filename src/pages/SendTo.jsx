import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {Form} from "react-bootstrap";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import SendModal from "../modals/SendModal";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {baseURL, getToken, printError} from "../services/Utils";
import currencyService from "../services/CurrencyService";
import {initializeSendDetails} from "../reducers/sendReducers";
import LoadingEffect from "../components/LoadingEffect";
import userService from "../services/UserService";

const SendTo = () => {
    const [showModal, setShowModal] = useState(false);
    const [recipientEmail, setRecipientEmail] = useState();
    const sendDetails = useSelector(state => state.send);
    const navigate = useNavigate();
    const [existReceiver, setExistReceiver] = useState(true)
    const [differentCountry, setDifferentCountry] = useState(true)
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
    }, []);

    const notFoundCallBack = () => {
        setCanWait(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setCanWait(true);
        axios.get(`${baseURL}/users/from-different-country/${recipientEmail}`, {headers: getToken()})
            .then(response => {
                if (response.data) {
                    currencyService.findCurrencyByCode(sendDetails?.toCurrencyCode, notFoundCallBack)
                        .then(
                            response => {
                                userService.isUserFromCountry(recipientEmail, sendDetails?.countryId)
                                    .then(fromCountryResponse => {
                                            if (fromCountryResponse) {
                                                const accountRq = {
                                                    currency: response,
                                                    accountType: "main"
                                                }
                                                const newSendDetails = {
                                                    ...sendDetails, accountRq: accountRq
                                                }
                                                dispatch(initializeSendDetails(newSendDetails));
                                                handleModal();
                                                setCanWait(false);
                                            } else {
                                                setDifferentCountry(false);
                                                setCanWait(false);
                                            }
                                        }
                                    ).catch(error => {
                                    setDifferentCountry(true);
                                    printError(error);
                                    setCanWait(false);
                                })

                            }
                        )
                } else {
                    setDifferentCountry(false);
                    setCanWait(false);
                }
            }).catch(error => {
            setCanWait(false);
            if (error?.response?.status === 404) {
                setExistReceiver(false)
            }
            printError(error);
        }).catch(error => {
            setCanWait(false);
            if (error?.response?.status === 404) {
                console.log("402")
            }
        })
    }
    const handleRecipientEmailChange = event => {
        const recipientEmail = event.target.value;
        setRecipientEmail(recipientEmail);
        if (!existReceiver) {
            setExistReceiver(true)
        }
        if (!differentCountry) {
            setDifferentCountry(true)
        }
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
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                {canWait && <LoadingEffect/>}
            </div>

            {
                !existReceiver &&
                <div>
                    <div className={"col-md-8 mx-auto d-flex justify-content-center mt-5"}>
                        <h5 className={"text-danger"}>Client with email <i
                            className={"text-black"}>{recipientEmail}</i> does not exist</h5>
                    </div>
                    <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                        <p>Please check the email address of your recipient or invite them to create an account</p>
                    </div>

                </div>

            }
            {
                !differentCountry &&
                <div className={"col-md-8 mx-auto d-flex justify-content-center mt-5"}>
                    <h5 className={"text-danger"}>User {recipientEmail} does not live in the selected country</h5>
                </div>
            }
            {recipientEmail && showModal &&
                <SendModal handleModal={handleModal} showModal={showModal} recipientEmail={recipientEmail}/>
            }
        </div>
    );
};

export default SendTo;
