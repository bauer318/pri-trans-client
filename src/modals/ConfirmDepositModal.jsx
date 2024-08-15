import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import orderService from "../services/orderService";
import {printError, roundValue} from "../services/Utils";

const ConfirmDepositModal = ({depositDetails, isAgent, showConfirmModal, handleConfirmModal}) => {
    const [formData, setFormData] = useState(depositDetails);
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        handleConfirmModal();
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
        orderService.confirmDeposit(orderDetails, !isAgent, callBack)
            .then(resp => {
                    //Void here
                    console.log(resp);
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
                <Modal.Title>Confirmer le dépôt</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId={"amount"}>
                        <Form.Label>Montant du dépôt</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={roundValue(depositDetails?.amount).toString().concat(" ").concat(depositDetails?.currency)}
                            readOnly={true}
                        />
                    </Form.Group>

                    <Form.Group controlId={"paymentMethod"}>
                        <Form.Label>Payé avec</Form.Label>
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
                            <Form.Label>Le numéro de l'agent</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={depositDetails?.agentWalletNumber}
                                readOnly={true}
                            />
                        </Form.Group>)
                    }
                    <Form.Group controlId={"refNumber"}>
                        <Form.Label>La référence [numéro ou nom du compte]</Form.Label>
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
                        <button className={"btn btn-primary"} type={"submit"}
                                disabled={canWait}>{canWait ? "Loading..." : "Confirmer le dépôt"}
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleConfirmModal} disabled={canWait}>Quitter</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDepositModal;