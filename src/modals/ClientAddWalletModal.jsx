import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";
import {getItem} from "../services/LocalStorageService";
import {useDispatch} from "react-redux";
import {createWallet} from "../reducers/walletReducer";

const ClientAddWalletModal = ({showModal, handleModal}) => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [canWait, setCanWait] = useState(false);
    useEffect(() => {
        const user = getItem('connectedUser');
        setFormData({...formData, participantId: user?.userId});
        setPaymentMethods(user?.country?.paymentMethods);
        setCurrencies(user?.country?.currencies);
    }, []);

    const callBack = () => {
        handleModal();
        setCanWait(false);
    }
    const handleSubmit = event => {
        event.preventDefault();
        setCanWait(true);
        dispatch(createWallet(formData, callBack));
    }
    const handlePMChange = event => {
        const id = Number(event.target.value);
        if (id)
            setFormData({...formData, paymentMethod: {paymentMethodId: id}});
    }

    const handleCurrencyChange = event => {
        const id = Number(event.target.value);
        if (id) {
            setFormData({...formData, currency: {currencyId: id}});
        }
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Ajouter le portefeuille</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="pm">
                        <Form.Label>Method de paiement</Form.Label>
                        <Form.Control
                            as="select"
                            name="paymentMethod"
                            required={true}
                            onChange={handlePMChange}
                        >
                            <option value="">Sélectionner une methode de paiement</option>
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
                            <option value="">Sélectionner la monnaie</option>
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
                            placeholder={"Telephone ou carte bancaire"}
                            name="walletNumber"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="accountName">
                        <Form.Label>Nom du compte</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Nom lié à ce compte"}
                            name="ownerName"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"} disabled={canWait}><span
                            className={"me-2"}><i><FaPlus/></i></span>{canWait ? "Adding..." : "Ajouter"}
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

export default ClientAddWalletModal;