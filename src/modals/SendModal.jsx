import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {TfiWallet} from "react-icons/tfi";
import {useSelector} from "react-redux";
import {AiOutlineArrowUp} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {get} from "../services/LocalStorageService";

const SendModal = ({showModal, handleModal, recipientEmail}) => {
    const sendDetails = useSelector(state => state.send);
    const navigate = useNavigate();
    const longedUser = get('longedUser');
    const handleSubmit = event => {
        event.preventDefault();
        //to server
        navigate(`/${longedUser.predPath}/account/1/`);

    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Send money</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <h4 className={"text-secondary"}>You're sending <span
                        className={"text-body"}> {`${sendDetails?.toAmount} ${sendDetails?.toCurrency?.currency}`} </span>
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
                <button className={"btn btn-danger"} onClick={handleModal}>Abort</button>
            </Modal.Footer>
        </Modal>
    );
};

export default SendModal;