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
    useEffect(() => {
        const user = getItem('connectedUser');
        setFormData({...formData, participantId: user?.userId});
        setPaymentMethods(user?.country?.paymentMethods);
        setCurrencies(user?.country?.currencies);
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createWallet(formData));
        handleModal();
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
                <Modal.Title>Add wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="pm">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Control
                            as="select"
                            name="paymentMethod"
                            required={true}
                            onChange={handlePMChange}
                        >
                            <option value="">Select payment method</option>
                            {
                                paymentMethods?.map(pm =>
                                    <option value={pm.paymentMethodId}
                                            key={pm.paymentMethodId}>{pm.paymentMethod}</option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="pm">
                        <Form.Label>Currency</Form.Label>
                        <Form.Control
                            as="select"
                            name="paymentMethod"
                            required={true}
                            onChange={handleCurrencyChange}
                        >
                            <option value="">Select currency</option>
                            {
                                currencies?.map(currency =>
                                    <option value={currency?.currencyId}
                                            key={currency?.currencyId}>{currency?.currency} , {currency?.symbol}</option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="num">
                        <Form.Label>Number [Phone or credit card]</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"Phone number or credit card number"}
                            name="walletNumber"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="accountName">
                        <Form.Label>Account name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"User name attached to this number"}
                            name="ownerName"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}><span className={"me-2"}><i><FaPlus/></i></span>Add
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Cancel</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ClientAddWalletModal;