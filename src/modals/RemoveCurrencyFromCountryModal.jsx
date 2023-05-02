import React from 'react';
import {Form, Modal} from "react-bootstrap";
import {GrCurrency} from "react-icons/gr";
const RemoveCurrencyFromCountryModal = ({showModal, handleModal,selectedCurrency, country}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        handleModal();
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Remove {selectedCurrency.currency} from {country}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicCurrency">
                        <Form.Label>Currency</Form.Label>
                        <Form.Control
                            type="text"
                            value={selectedCurrency.currency}
                            readOnly={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicSymbol">
                        <Form.Label>Symbol</Form.Label>
                        <Form.Control
                            type="text"
                            value={selectedCurrency.symbol}
                            readOnly={true}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"}><span className={"me-2"}><i><GrCurrency/></i></span>Remove
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

export default RemoveCurrencyFromCountryModal;