import React from 'react';
import {Form, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ConfirmDepositModal = ({showConfirmModal, handleConfirmModal}) => {
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();

    }
    return (
        <Modal show={showConfirmModal} onHide={handleConfirmModal}>
            <Modal.Header>
                <Modal.Title>Confirm deposit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId={"amount"}>
                        <Form.Label>Deposit's amount</Form.Label>
                        <Form.Control
                            type={"text"}
                            defaultValue={"100.25"}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"paymentMethod"}>
                        <Form.Label>Paying with</Form.Label>
                        <Form.Control
                            type={"text"}
                            defaultValue={"Sberbank"}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"toAgent"}>
                        <Form.Label>Agent's number</Form.Label>
                        <Form.Control
                            type={"text"}
                            defaultValue={"9458-854"}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"refNumber"}>
                        <Form.Label>Reference's number</Form.Label>
                        <Form.Control
                            type={"text"}
                            placeholder={"reference"}
                            required={true}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"}>Confirm deposit</button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleConfirmModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDepositModal;