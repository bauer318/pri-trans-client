import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import walletService from "../services/walletService";
import {printError} from "../services/Utils";
import accountService from "../services/accountService";
import {useNavigate} from "react-router-dom";
import orderService from "../services/orderService";

const ConfirmWithdrawModal = ({withdrawDetails, isAgent, showModal, handleModal}) => {
    const [formData, setFormData] = useState(withdrawDetails);
    const [userWallet, setUserWallet] = useState();
    const navigate = useNavigate();
    const [canWait, setCanWait] = useState(false);
    const callBackAgent = () => {
        setCanWait(false);
        navigate("/agent/withdrawals");
        handleModal();
    }

    const callBackClient = ()=>{
        setCanWait(false);
        handleModal();
        navigate("/client/account")
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (isAgent) {
            const orderDetails = {
                orderId: withdrawDetails?.orderId,
                paidAmount: withdrawDetails?.amount,
                reference: formData["reference"]
            }
            setCanWait(true);
            orderService.confirmWithdrawByAgent(orderDetails,callBackAgent).then(
                response => {

                }
            ).catch(error => {
                printError(error);
            })

        } else {
            setCanWait(true);
            accountService.withdraw(withdrawDetails?.withdrawRq,callBackClient)
                .then(
                    response => {

                    }
                ).catch(error => {
                printError(error);
            })

        }
    }
    useEffect(() => {
        if (!isAgent) {
            walletService.getWallet(withdrawDetails?.participantId, withdrawDetails?.currency?.currency, withdrawDetails?.paymentMethod)
                .then(r => {
                    setUserWallet(r);
                })
                .catch(error => {
                    printError(error);
                })
        }

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
                            defaultValue={withdrawDetails?.amount.toString().concat(" ").concat(isAgent ? withdrawDetails?.currency : withdrawDetails?.currency?.symbol)}
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
                            defaultValue={isAgent ? withdrawDetails?.clientWalletNumber : userWallet?.walletNumber}
                            readOnly={true}
                        />
                    </Form.Group>
                    {
                        isAgent &&
                        <Form.Group controlId={"ownerName"}>
                            <Form.Label>Wallet's owner name</Form.Label>
                            <Form.Control
                                type={"text"}
                                defaultValue={withdrawDetails?.ownerName}
                                readOnly={true}
                            />
                        </Form.Group>
                    }

                    {
                        isAgent &&
                        <Form.Group controlId={"ref"}>
                            <Form.Label>Reference</Form.Label>
                            <Form.Control
                                type={"text"}
                                placeholder={"reference number"}
                                name={"reference"}
                                required={true}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    }

                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"} disabled={canWait}>Confirm withdraw
                        </button>
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