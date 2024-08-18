import React from 'react';
import {useNavigate} from "react-router-dom";
import {Form, Modal} from "react-bootstrap";
import {IoMdLogIn, IoIosWarning} from "react-icons/io";

const MustConnectToContinueModal = ({showModal, handleModal}) => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        handleModal();
        navigate('/login');
    }
    return (
        <>
            <Modal show={showModal} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title><i className={"text-danger"}><IoIosWarning/></i> Connection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <hr/>
                        <h4 className={"text-secondary"}>Vous devez vous connecter pour afficher ce contact</h4>
                        <hr/>
                        <div className={"mt-2"}>
                            <button className={"btn btn-primary"} type={"submit"}><span
                                className={"me-2"}><i><IoMdLogIn/></i></span>Se connecter
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

export default MustConnectToContinueModal;