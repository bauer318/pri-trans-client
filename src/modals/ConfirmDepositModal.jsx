import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import orderService from "../services/orderService";
import {printError} from "../services/Utils";

const ConfirmDepositModal = ({depositDetails, isAgent, showConfirmModal, handleConfirmModal}) => {
    const [formData, setFormData] = useState(depositDetails);
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const orderDetails = {
            orderId: depositDetails?.orderId,
            paidAmount: depositDetails?.amount,
            reference: formData?.reference
        }
        setCanWait(true);
        orderService.confirmDeposit(orderDetails, !isAgent)
            .then(resp => {
                    handleConfirmModal();
                    setCanWait(false);
                }
            ).catch(error => {
            printError(error);
        })
    }
    const handleChange = event => {
        const {value, name} = event.target;
        setFormData({...formData, [name]: value});
    }
    return (
        <Modal show={showConfirmModal} onHide={handleConfirmModal}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm deposit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId={"amount"}>
                        <Form.Label>Deposit's amount</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.amount.toString().concat(" ").concat(depositDetails?.currency)}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"paymentMethod"}>
                        <Form.Label>Paying with</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails.paymentMethod}
                            readOnly={true}
                        />
                    </Form.Group>
                    {
                        isAgent ? (<Form.Group controlId={"fromClient"}>
                            <Form.Label>Client</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={depositDetails?.ownerName}
                                readOnly={true}
                            />
                        </Form.Group>) : (<Form.Group controlId={"toAgent"}>
                            <Form.Label>Agent's number</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={depositDetails?.agentWalletNumber}
                                readOnly={true}
                            />
                        </Form.Group>)
                    }
                    <Form.Group controlId={"refNumber"}>
                        <Form.Label>Reference's number</Form.Label>
                        <Form.Control
                            type={"text"}
                            placeholder={"reference"}
                            defaultValue={depositDetails?.reference}
                            name={"reference"}
                            required={!isAgent}
                            readOnly={isAgent}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"} disabled={canWait}>Confirm deposit
                        </button>
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