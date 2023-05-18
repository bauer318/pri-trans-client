import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";

const ConfirmWithdrawModal = ({withdrawDetails,isAgent,showModal, handleModal}) => {
    const [formData, setFormData] = useState(withdrawDetails);
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        handleModal();
    }
    const handleChange = event =>{
        const {value, name} = event.target;
        setFormData({...formData, [name]:value});
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm withdraw</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId={"amount"}>
                        <Form.Label>Withdraw amount</Form.Label>
                        <Form.Control
                            type={"text"}
                            defaultValue={withdrawDetails?.amount}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"paymentMethod"}>
                        <Form.Label>Receiving via</Form.Label>
                        <Form.Control
                            type={"text"}
                            defaultValue={withdrawDetails?.paymentMethod?.paymentMethod}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"toAgent"}>
                        <Form.Label>Wallet's number</Form.Label>
                        <Form.Control
                            type={"text"}
                            defaultValue={withdrawDetails?.paymentMethod?.number}
                            readOnly={true}
                        />
                    </Form.Group>
                    {
                        isAgent &&
                        <Form.Group controlId={"ref"}>
                            <Form.Label>Reference</Form.Label>
                            <Form.Control
                                type={"text"}
                                placeholder={"reference number"}
                                name={"ref"}
                                required={true}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    }
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}>Confirm withdraw</button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmWithdrawModal;