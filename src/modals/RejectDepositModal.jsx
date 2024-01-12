import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import orderService from "../services/orderService";
import {printError} from "../services/Utils";

const RejectDepositModal = ({depositDetails, showModal, handleModal}) => {
    const [formData, setFormData] = useState(depositDetails);
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const rejectDepositPut = {
            orderId: formData?.orderId,
            rejectCause: formData?.note
        }
        setCanWait(true);
        orderService.rejectDepositOrder(rejectDepositPut, true)
            .then(response => {
                handleModal();
                callBack();
            }).catch(error => {
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
                <Modal.Title>Reject deposit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId={"amount"}>
                        <Form.Label>Deposit's amount</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.amount.toString().concat(` ${depositDetails?.currency}`)}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"paymentMethod"}>
                        <Form.Label>Paying with</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.paymentMethod}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"fromClient"}>
                        <Form.Label>Client</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.ownerName}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"refNumber"}>
                        <Form.Label>Reference's number</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={depositDetails?.reference}
                            name={"reference"}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"note"}>
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name={"note"}
                            placeholder={"why rejected?..."}
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"} disabled={canWait}>Reject deposit</button>
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