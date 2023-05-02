import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaExchangeAlt} from "react-icons/fa";

const UpdatePaymentMethod = ({showModal, handleModal, selectedPaymentMethod, isDelete}) => {
    const [formData, setFormData] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        handleModal();
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>{isDelete ? "Delete " : "Edit "} payment method</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicPM">
                        <Form.Label>Payment method</Form.Label>
                        <Form.Control
                            type="text"
                            name="paymentMethod"
                            defaultValue={selectedPaymentMethod.paymentMethod}
                            required={true}
                            onChange={handleChange}
                            readOnly={isDelete}
                        />
                    </Form.Group>

                    <div className={"mt-2"}>
                        <button className={isDelete ? "btn btn-danger" : "btn btn-primary"} type={"submit"}>
                            <span className={"me-2"}><i><FaExchangeAlt/></i></span>{isDelete ? "Delete" : "Save"}
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

export default UpdatePaymentMethod;