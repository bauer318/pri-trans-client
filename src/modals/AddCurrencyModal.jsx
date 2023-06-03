import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {GrCurrency} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {createCurrency} from "../reducers/currencyReducers";

const AddCurrencyModal = ({showModal , handleModal}) => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createCurrency(formData));
        handleModal();
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add currency</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicCurrency">
                        <Form.Label className={"required"}>Currency</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Russian Ruble"
                            name="currency"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCurrencyCode">
                        <Form.Label className={"required"}>Currency</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="RUB"
                            name="currencyCode"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicSymbol">
                        <Form.Label className={"required"}>Symbol</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="₽"
                            name="symbol"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}><span className={"me-2"}><i><GrCurrency/></i></span>Add
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddCurrencyModal;