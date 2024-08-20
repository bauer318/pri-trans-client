import React from 'react';
import {Form, Modal} from "react-bootstrap";

const HelpModal = ({showModal, handleModal}) => {
    const handleSubmit = () => {
        handleModal();
    }
    return (
        <>
            <Modal show={showModal} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Service non disponible</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <hr/>
                        <h4 className={"text-secondary"}>Ce service n'est pas disponible actuellement. Toutes nos
                            sincères excuses.</h4>
                        <p>Toutes fois , vous pouvez noter la nécessité de ce service entre 1 et 5.</p>
                        <p><span className={"text-danger"}>1/5</span> - le service n'est absolument pas nécessaire</p>
                        <p><span className={"text-success"}>5/5</span> - le service est indispensable ☻</p>
                        <hr/>
                        <div className={"mt-2"}>
                            <a className={'btn btn-sm btn-outline-primary'}
                               href={"https://forms.yandex.ru/u/65a25274d0468848f12a169b/"} target={"_blank"}
                               onClick={handleSubmit}>Noter</a>
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

export default HelpModal;