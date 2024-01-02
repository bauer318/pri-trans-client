import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import walletService from "../services/walletService";
import {printError} from "../services/Utils";
import accountService from "../services/accountService";
import {useNavigate} from "react-router-dom";

const ConfirmWithdrawModal = ({withdrawDetails, isAgent, showModal, handleModal}) => {
    const [formData, setFormData] = useState(withdrawDetails);
    const [userWallet, setUserWallet] = useState();
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        accountService.withdraw(withdrawDetails?.withdrawRq).then(
            response => {
                console.log(response);
                navigate("/client/account")
            }
        ).catch(error => {
            printError(error);
        })
        handleModal();
    }
    useEffect(() => {
        console.log(withdrawDetails);
        walletService.getWallet(withdrawDetails?.participantId, withdrawDetails?.currency?.currency, withdrawDetails?.paymentMethod)
            .then(r => {
                setUserWallet(r);
            })
            .catch(error => {
                printError(error);
            })
    }, []);
    const handleChange = event => {
        const {value, name} = event.target;
        setFormData({...formData, [name]: value});
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
                            defaultValue={withdrawDetails?.amount.toString().concat(" " + withdrawDetails?.currency?.symbol)}
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
                            defaultValue={userWallet?.walletNumber}
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