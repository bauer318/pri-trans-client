import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {TfiWallet} from "react-icons/tfi";
import ToastNotification from "./toastNotification";
import manualTransferService from "../services/ManualTransferService";
import {printError} from "../services/Utils";
import {refreshTransferList} from "../pages/ClientPrivateManualTransfer";
import telegramNotificationService from "../services/TelegramNotificationService";

const UpdateManualTransferModal = ({showModal, handleModal, transferId}) => {
    const [notify, setNotify] = useState(false);
    const [formData, setFormData] = useState({
        id: transferId
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        manualTransferService.update(formData).then(
            () => {
                handleModal();
                setNotify(true);
                refreshTransferList();
                telegramNotificationService.notifyAll(formData).then(() => {
                    ;
                }).catch(error => {
                    printError(error);
                })
            }
        ).catch(error => {
            printError(error);
        })
    }
    const handleChange = e => {
        const amountProcessed = Number(e.target.value);
        setFormData({...formData, ['amountProcessed']: amountProcessed});
    }
    return (
        <>
            <Modal show={showModal} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier le transfert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicAmount">
                            <Form.Label>Montant déjà transféré</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="100"
                                name="amountProcessed"
                                required={true}
                                pattern="^\d*\.?\d*$"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <div className={"mt-2"}>
                            <button className={"btn btn-primary"} type={"submit"}><span
                                className={"me-2"}><i><TfiWallet/></i></span>Modifier
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className={"btn btn-secondary"} onClick={handleModal}>Quitter</button>
                </Modal.Footer>
            </Modal>
            {notify && <ToastNotification message={"Modifié"}/>}
        </>
    );
};

export default UpdateManualTransferModal;