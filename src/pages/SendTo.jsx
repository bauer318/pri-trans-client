import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {Form} from "react-bootstrap";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import SendModal from "../modals/SendModal";
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
            printError(error);
            setCanWait(false);
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
            <CSWHeader title={"Envoyer de l'argent"}/>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                <Form onSubmit={handleSubmit}>
                    <h3>À qui envoyez-vous de l'argent?</h3>
                    <Form.Group>
                        <Form.Control
                            type={"email"}
                            required={true}
                            placeholder={"l'adresse e-mail du destinataire"}
                            onChange={handleRecipientEmailChange}
                        />
                    </Form.Group>
                    <button className={"btn btn-primary mt-2"} type={"submit"}
                            disabled={canWait}>{canWait ? "Loading..." : "Continuer"}<span
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
                        <h5 className={"text-danger"}>Aucun client n'est enregistré avec cet e-mail <i
                            className={"text-black"}>{recipientEmail}</i></h5>
                    </div>
                    <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                        <p>Veuillez vérifier l'adresse e-mail de votre destinataire ou l'inviter à créer un compte</p>
                    </div>

                </div>

            }
            {
                !differentCountry &&
                <div className={"col-md-8 mx-auto d-flex justify-content-center mt-5"}>
                    <h5 className={"text-danger"}>L'utilisateur {recipientEmail} ne vit pas dans le pays sélectionné
                        ou son compte n'est pas vérifié </h5>
                </div>
            }
            {recipientEmail && showModal &&
                <SendModal handleModal={handleModal} showModal={showModal} recipientEmail={recipientEmail}/>
            }
        </div>
    );
};

export default SendTo;
