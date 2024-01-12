import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaExchangeAlt} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {createNewPaymentMethod} from "../reducers/paymentMethodReducers";

const AddPaymentMethodModal = ({showModal, handleModal}) => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const addedPaymentMethod = {
            method: formData?.method
        }
        setCanWait(true);
        dispatch(createNewPaymentMethod(addedPaymentMethod, callBack));
        handleModal();
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add payment method</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicMethod">
                        <Form.Label>Payment method</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Airtel money"
                            name="method"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"} disabled={canWait}><span
                            className={"me-2"}><i><FaExchangeAlt/></i></span>Add
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

export default AddPaymentMethodModal;