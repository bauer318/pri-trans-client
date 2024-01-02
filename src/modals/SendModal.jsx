import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {useSelector} from "react-redux";
import {AiOutlineArrowUp} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import accountService from "../services/accountService";
import {printError} from "../services/Utils";
import orderService from "../services/orderService";

const SendModal = ({showModal, handleModal, recipientEmail}) => {
    const sendDetails = useSelector(state => state.send);
    const navigate = useNavigate();
    const [receiverAccountId, setReceiverAccountId] = useState();

    console.log(sendDetails);
    useEffect(() => {
        accountService.getUserMainAccountId(recipientEmail, sendDetails?.toCurrencyCode)
            .then(data => {
                setReceiverAccountId(data)
            }).catch(error => {
            printError(error);
        })
    }, []);
    const handleSubmit = event => {
        event.preventDefault();
        if (receiverAccountId) {
            const orderRq = {
                fromAccountId: sendDetails?.fromAccount?.accountId,
                toAccountId: receiverAccountId,
                rate: sendDetails?.liveRate,
                amount: sendDetails?.toAmount,
                transactionType: "transfert"
            }
            console.log(orderRq);
            accountService.sendTo(orderRq)
                .then(orderId => {
                    if (orderId > 0) {
                        console.log(orderId);
                    }
                }).catch(error => {

                printError(error);
            })
            //to server
            //navigate('/client/account/1/');
        }


    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Send money</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <h4 className={"text-secondary"}>You're sending <span
                        className={"text-body"}> {`${sendDetails?.toAmount} ${sendDetails?.toCurrencyCode}`} </span>
                    </h4>
                    <h4 className={"text-secondary"}>To <span className={"text-body"}>{recipientEmail}</span></h4>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}><span
                            className={"me-2"}><i><AiOutlineArrowUp size={28}/></i></span>Send
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

export default SendModal;