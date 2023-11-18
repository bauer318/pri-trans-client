import React from 'react';
import {Form, Modal} from "react-bootstrap";
import orderService from "../services/orderService";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";

const CancelDepositModal = ({depositDetails,showCancelModal, handleCancelModal}) => {
    console.log(depositDetails);
    const handleSubmit = (event)=>{
        event.preventDefault();
        orderService.deleteOrder(depositDetails?.orderId).then(
            response=>{
                handleCancelModal();
            }
        )
    }
    return (
        <Modal show={showCancelModal} onHide={handleCancelModal}>
            <Modal.Header closeButton>
                <Modal.Title>Cancel deposit</Modal.Title>
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
                        <Form.Label>Payment method</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.paymentMethod}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"toAgent"}>
                        <Form.Label>Agent's number</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.agentWalletNumber}
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