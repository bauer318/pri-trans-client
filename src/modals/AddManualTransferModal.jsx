import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {TfiWallet} from "react-icons/tfi";
import ToastNotification from "./toastNotification";
import countryService from "../services/CountryService";
import {printError} from "../services/Utils";
import manualTransferService from "../services/ManualTransferService";
import telegramNotificationService from "../services/TelegramNotificationService";

const AddManualTransferModal = ({showModal, handleModal}) => {
    const [isLoadingCountriesToSend, setIsLoadingCountriesToSend] = useState(true);
    const [countriesToSend, setCountriesToSend] = useState([]);
    const [notify, setNotify] = useState(false);
    const [currencies, setCurrencies] = useState([]);
    const [canWait, setCanWait] = useState(false);
    const [isDestinationSelected, setIsDestinationSelected] = useState(false);
    const [formData, setFormData] = useState({
        exchangeRate: 1.00
    });
    const getAvailableCountriesToSend = () => {
        setIsLoadingCountriesToSend(true);
        countryService.getUserAvailableCountriesToSend().then(response => {
            setCountriesToSend(response);
            setIsLoadingCountriesToSend(false);
        }).catch(error => {
            printError(error);
        })
    };
    useEffect(() => {
        getAvailableCountriesToSend();
    }, [notify]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setCanWait(true);
        manualTransferService.createNew(formData).then(() => {
            setNotify(true);
            handleModal();
            setCanWait(false);
            telegramNotificationService.notifyAll(formData).then(()=>{
                ;
            }).catch(error=>{
                printError(error);
            })
        }).catch(error => {
            printError(error);
        })
    }
    const handleDestinationChange = e => {
        const selectedCountry = e.target.value;
        if (selectedCountry !== "") {
            setIsDestinationSelected(true)
            const destinationCountry = countriesToSend.filter(country => country?.countryId === Number(selectedCountry))[0]
            setFormData({...formData, ['destination']: destinationCountry?.countryName});
            setCurrencies(destinationCountry?.currencies);
        } else {
            setIsDestinationSelected(false)
        }
    }
    const handleChange = e => {
        const amount = Number(e.target.value);
        setFormData({...formData, ['amount']: amount});
    }
    const handleCurrencyChange = e => {
        const selectedCurrency = e.target.value;
        setFormData({...formData, ['currency']: selectedCurrency});
    }
    return (
        <>
            <Modal show={showModal} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un transfert manuel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicMainCountry">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control as="select"
                                          name="destination"
                                          required={true}
                                          onChange={handleDestinationChange}
                            >
                                <option
                                    value={""}>{isLoadingCountriesToSend ? "Loading..." : "Sélectionner la destination"}</option>
                                {countriesToSend?.map((country, key) => <option value={country?.countryId}
                                                                                key={key}>{country?.countryName}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicAmount">
                            <Form.Label>Montant</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="100"
                                name="amount"
                                required={true}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {isDestinationSelected && <Form.Group>
                            <Form.Label>Monnaie</Form.Label>
                            <Form.Control
                                as="select"
                                name="currency"
                                required={true}
                                onChange={handleCurrencyChange}
                            >
                                <option
                                    value={""}>{isLoadingCountriesToSend ? 'Loading...' : 'Sélectionner la monnaie'}
                                </option>
                                {
                                    currencies?.map((currency, key) =>
                                        <option value={currency?.symbol}
                                                key={key}>{currency?.code}</option>
                                    )
                                }
                            </Form.Control>
                        </Form.Group>}

                        <div className={"mt-2"}>
                            <button className={"btn btn-primary"} type={"submit"}
                                    disabled={isLoadingCountriesToSend || canWait}><span
                                className={"me-2"}><i><TfiWallet/></i></span>Ajouter
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className={"btn btn-secondary"} onClick={handleModal}>Quitter</button>
                </Modal.Footer>
            </Modal>
            {notify && <ToastNotification message={"Transfer manuel ajouté"}/>}
        </>
    );
};

export default AddManualTransferModal;