import React from 'react';
import {Form, Modal} from "react-bootstrap";
import {AiOutlineDelete} from "react-icons/ai";

const DeleteWalletModal = ({wallet, showModal, handleModal}) => {
    const handleSubmit = event => {
        event.preventDefault();
        console.log(wallet);
        //delete payment methode
        handleModal();
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete wallet</Modal.Title>
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
                            <option value={wallet?.paymentMethod.id}>{wallet?.paymentMethod.pm}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="num">
                        <Form.Label>Number</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={wallet?.number}
                            name="number"
                            readOnly={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="accountName">
                        <Form.Label>Account name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={wallet?.accountName}
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

export default DeleteWalletModal;
