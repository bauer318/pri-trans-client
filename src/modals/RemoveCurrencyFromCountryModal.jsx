import React from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaCity} from "react-icons/fa";
import {GrCurrency} from "react-icons/gr";

const RemoveCurrencyFromCountryModal = ({showModal, handleModal,currencyId, countryId}) => {
    const currency ={
        currencyId,
        currency:"Dollars USD",
        symbol:"$"
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your code to post the form data to your backend
        handleModal();
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Remove {currency.currency} from {countryId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicCurrency">
                        <Form.Label>Currency</Form.Label>
                        <Form.Control
                            type="text"
                            value={currency.currency}
                            readOnly={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicSymbol">
                        <Form.Label>Symbol</Form.Label>
                        <Form.Control
                            type="text"
                            value={currency.symbol}
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