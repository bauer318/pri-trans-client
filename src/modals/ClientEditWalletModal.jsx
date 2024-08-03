import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {getItem} from "../services/LocalStorageService";
import {BsSave} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {updateWallet} from "../reducers/walletReducer";

const ClientEditWalletModal = ({wallet, showModal, handleModal}) => {
    const [formData, setFormData] = useState(wallet);
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
        handleModal();
    }
    useEffect(() => {
        const user = getItem('connectedUser');
        setPaymentMethods(user?.country?.paymentMethods.filter(pm => pm.paymentMethodId !== formData?.paymentMethod?.paymentMethodId));
        setCurrencies(user?.country?.currencies.filter(currency => currency.currencyId !== formData?.currency?.currencyId));
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        setCanWait(true)
        dispatch(updateWallet(formData, formData?.walletId, callBack));
    }
    const handlePMChange = event => {
        const pmId = Number(event.target.value);
        setFormData({...formData, paymentMethod: {paymentMethodId: pmId}});
    }


    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleCurrencyChange = event => {
        const currencyId = Number(event.target.value);
        setFormData({...formData, currency: {currencyId: currencyId}});
    }

    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modifier le portefeuille</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="pm">
                        <Form.Label>Methode de paiement</Form.Label>
                        <Form.Control
                            as="select"
                            name="paymentMethod"
                            required={true}
                            onChange={handlePMChange}
                        >
                            <option
                                value={formData?.paymentMethod?.paymentMethodId}>{formData?.paymentMethod?.paymentMethod}</option>
                            {
                                paymentMethods?.map(pm =>
                                    <option value={pm.paymentMethodId}
                                            key={pm.paymentMethodId}>{pm.paymentMethod}</option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="pm">
                        <Form.Label>Monnaie</Form.Label>
                        <Form.Control
                            as="select"
                            name="paymentMethod"
                            required={true}
                            onChange={handleCurrencyChange}
                        >
                            <option value={formData?.currency?.currencyId}>{formData?.currency?.currency}</option>
                            {
                                currencies?.map(currency =>
                                    <option value={currency?.currencyId}
                                            key={currency?.currencyId}>{currency?.currency} , {currency?.symbol}</option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="num">
                        <Form.Label>Numéro [Telephone ou carte bancaire]</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Numéro de telephone ou carte bancaire"}
                            name="walletNumber"
                            required={true}
                            value={formData?.walletNumber}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="accountName">
                        <Form.Label>Nom du compte</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Nom lié au compte"}
                            name="ownerName"
                            required={true}
                            value={formData?.ownerName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"} disabled={canWait}><span
                            className={"me-2"}><i><BsSave/></i></span>{canWait ? "Editing..." : "Sauvegarder"}
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal} disabled={canWait}>Annuler</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ClientEditWalletModal;