import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {useSelector} from "react-redux";
import {AiOutlineArrowUp} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import accountService from "../services/accountService";
import {printError, roundValue} from "../services/Utils";
import userService from "../services/UserService";

const SendModal = ({showModal, handleModal, recipientEmail}) => {
    const sendDetails = useSelector(state => state.send);
    const navigate = useNavigate();
    const [receiverAccountId, setReceiverAccountId] = useState();
    const [canWait, setCanWait] = useState(false);
    const [receiver, setReceiver] = useState({});
    const [canWaitPersonalInfo, setCanWaitPersonalInfo] = useState(false);
    const callBack = () => {
        setCanWait(false);
        handleModal();
    }

    useEffect(() => {
        accountService.getUserMainAccountId(recipientEmail, sendDetails?.toCurrencyCode)
            .then(data => {
                setReceiverAccountId(data)
                setCanWaitPersonalInfo(true);
                userService.getUserByEmail(recipientEmail).then(
                    response => {
                        const personalInfo = response?.personalInfo;
                        setReceiver({
                            firstname: personalInfo?.firstname,
                            lastname: personalInfo?.lastname,
                            phone: personalInfo?.phone
                        });
                        setCanWaitPersonalInfo(false);
                    }
                ).catch(error => {
                    printError(error);
                    setCanWaitPersonalInfo(false);
                })
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
                fromAmount: sendDetails?.fromAmount,
                transactionType: "transfert"
            }
            setCanWait(true);
            accountService.sendTo(orderRq)
                .then(orderId => {
                    if (orderId > 0) {
                        navigate('/client/account');
                        callBack();
                    }
                }).catch(error => {
                printError(error);
                callBack();

            })
        } else {
            handleModal();
        }

    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Envoyez de l'argent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <h4 className={"text-secondary"}>Vous envoyez<span
                        className={"text-body"}> {`${roundValue(sendDetails?.toAmount)} ${sendDetails?.toCurrencyCode}`} </span>
                    </h4>
                    <h4 className={"text-secondary"}>à <span className={"text-body"}>{recipientEmail}</span></h4>
                    <hr/>
                    {canWaitPersonalInfo && <p className={"text-secondaire"}>Loading more infos...</p>}
                    {!canWaitPersonalInfo && <h4 className={"text-secondary"}><span
                        className={"text-body"}>{receiver?.firstname?.concat(" ")?.concat(receiver?.lastname)}</span>
                    </h4>}
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"} disabled={canWait}><span
                            className={"me-2"}><i><AiOutlineArrowUp
                            size={28}/></i></span>{canWait ? "Sending..." : "Envoyez"}
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal} disabled={canWait}>Quitter</button>
            </Modal.Footer>
        </Modal>
    );
};

export default SendModal;