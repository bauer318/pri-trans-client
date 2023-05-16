import React from 'react';
import {Form, Modal} from "react-bootstrap";

const CancelDepositModal = ({showCancelModal, handleCancelModal}) => {
    const handleSubmit = (event)=>{
        event.preventDefault();

    }
    return (
        <Modal show={showCancelModal} onHide={handleCancelModal}>
            <Modal.Header>
                <Modal.Title>Cancel deposit</Modal.Title>
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
                        <Form.Label>Payment method</Form.Label>
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
                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"}>Cancel deposit</button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleCancelModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default CancelDepositModal;