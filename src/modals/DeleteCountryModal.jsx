import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaCity} from "react-icons/fa";
import country from "../components/Country";
import {useSelector} from "react-redux";

const DeleteCountryModal = ({showModal, handleModal, countryId}) => {
    const country = useSelector(state => state.countries.find(country=>country.id===countryId));
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your code to post the form data to your backend
        handleModal();
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete country</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            value={country.country}
                            readOnly={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCurrency">
                        <Form.Label>Main currency</Form.Label>
                        <Form.Control
                            type="text"
                            value={country.currencies[0].currency}
                            readOnly={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPM">
                        <Form.Label>Main payment method</Form.Label>
                        <Form.Control
                            type="text"
                            readOnly={true}
                            value={country.paymentMethods[0].paymentMethod}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"}><span className={"me-2"}><i><FaCity/></i></span>Delete
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}
export default DeleteCountryModal;