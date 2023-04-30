import React from 'react';
import {Form, Modal} from "react-bootstrap";
import {GrCurrency} from "react-icons/gr";
import {FaExchangeAlt} from "react-icons/fa";

const RemovePaymentMethodFromCountryModal = ({showModal, handleModal,paymentMethodId, countryId}) => {
    const paymentMethod={
        paymentMethodId,
        paymentMethod:"MPesa"
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        handleModal();
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Remove {paymentMethod.paymentMethod} from {countryId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicPM">
                        <Form.Label>Payment method</Form.Label>
                        <Form.Control
                            type="text"
                            value={paymentMethod.paymentMethod}
                            readOnly={true}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"}><span className={"me-2"}><i><FaExchangeAlt/></i></span>Remove
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

export default RemovePaymentMethodFromCountryModal;