import React from 'react';
import {Form, Modal} from "react-bootstrap";
import {AiOutlineDelete} from "react-icons/ai";

const ClientDeleteWalletModal = ({paymentMethod, showModal, handleModal}) => {
    const handleSubmit = event => {
        event.preventDefault();
        //delete payment methode
        handleModal();
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete payment method</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="pm">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Control
                            as="select"
                            name="pm"
                            disabled={true}
                        >
                            <option value={paymentMethod?.paymentMethod.id}>{paymentMethod?.paymentMethod.pm}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="num">
                        <Form.Label>Number</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={paymentMethod?.number}
                            name="number"
                            readOnly={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="accountName">
                        <Form.Label>Account name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={paymentMethod?.accountName}
                            name="accountName"
                            readOnly={true}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"}><span
                            className={"me-2"}><i><AiOutlineDelete/></i></span>Delete
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Cancel</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ClientDeleteWalletModal;
