import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";

const RejectDepositModal = ({depositDetails, showModal, handleModal}) => {
    const [formData, setFormData] = useState(depositDetails);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        handleModal();
    }
    const handleChange = event => {
        const {value, name} = event.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Reject deposit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId={"amount"}>
                        <Form.Label>Deposit's amount</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.amount}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"paymentMethod"}>
                        <Form.Label>Paying with</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails.paymentMethod.pm}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"fromClient"}>
                        <Form.Label>Client</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.client}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"refNumber"}>
                        <Form.Label>Reference's number</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.ref}
                            name={"note"}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"note"}>
                        <Form.Label className={"required"}>Note</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder={"why rejected?..."}
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"}>Reject deposit</button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default RejectDepositModal;