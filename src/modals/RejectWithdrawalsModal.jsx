import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import orderService from "../services/orderService";
import {printError} from "../services/Utils";

const RejectWithdrawalsModal = ({withdrawDetails, showModal, handleModal}) => {
    const [formData, setFormData] = useState(withdrawDetails);
    const handleSubmit = event => {
        event.preventDefault();
        const rejectWithdrawPut = {
            orderId: formData?.orderId,
            rejectCause: formData?.note
        }
        orderService.rejectDepositOrder(rejectWithdrawPut, false)
            .then(
                response => {
                    handleModal();
                }
            ).catch(error => {
            printError(error);
            handleModal();
        })
    }
    const handleChange = event => {
        const {value, name} = event.target;
        setFormData({...formData, [name]: value});
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Reject withdraw</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId={"amount"}>
                        <Form.Label>Withdraw amount</Form.Label>
                        <Form.Control
                            type={"text"}
                            defaultValue={withdrawDetails?.amount.toString().concat(` ${withdrawDetails?.currency}`)}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"paymentMethod"}>
                        <Form.Label>Receiving via</Form.Label>
                        <Form.Control
                            type={"text"}
                            defaultValue={withdrawDetails?.paymentMethod}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"toAgent"}>
                        <Form.Label>Wallet's number</Form.Label>
                        <Form.Control
                            type={"text"}
                            defaultValue={withdrawDetails?.clientWalletNumber}
                            readOnly={true}
                        />
                    </Form.Group>
                    <Form.Group controlId={"note"}>
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder={"why reject withdraw?..."}
                            name={"note"}
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"}>Reject withdraw</button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default RejectWithdrawalsModal;