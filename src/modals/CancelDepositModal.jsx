import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import orderService from "../services/orderService";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";

const CancelDepositModal = ({depositDetails, showCancelModal, handleCancelModal}) => {
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        handleCancelModal();
        setCanWait(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setCanWait(true);
        orderService.deleteOrder(depositDetails?.orderId, callBack).then(
            response => {
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
                        <button className={"btn btn-danger"} type={"submit"}
                                disabled={canWait}>{canWait ? "Loading..." : "Cancel deposit" }< /button>
                            </div>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <button className={"btn btn-secondary"} onClick={handleCancelModal} disabled={canWait}>Close
                        </button>
                    </Modal.Footer>
        </Modal>
);
};

export default CancelDepositModal;