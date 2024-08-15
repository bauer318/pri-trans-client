import React from 'react';
import {Form, Modal} from "react-bootstrap";
import {TfiWallet} from "react-icons/tfi";
import {useNavigate} from "react-router-dom";
import {getItem} from "../services/LocalStorageService";

const ToAddPersonalInfoModal = ({showModal, handleModal}) => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        handleModal();
        navigate('/client/profile/edit',{state: {participant: getItem('connectedUser')}});
    }
    return (
        <>
            <Modal show={showModal} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter vos infos personnelles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <hr/>
                        <h4 className={"text-secondary"}>Ajouter vos informations personnelles pour effectuer cette
                            opération</h4>
                        <hr/>
                        <div className={"mt-2"}>
                            <button className={"btn btn-primary"} type={"submit"}><span
                                className={"me-2"}><i><TfiWallet/></i></span>Ajouter
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className={"btn btn-secondary"} onClick={handleModal}>Pas maintenant</button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ToAddPersonalInfoModal;