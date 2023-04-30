import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {ImUserPlus} from "react-icons/im";
import {FaCity} from "react-icons/fa";

const AddCountryModal = ({showModal, handleModal}) => {
    const [formData, setFormData] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your code to post the form data to your backend
        console.log(formData);
        handleModal();
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add country</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="DR Congo"
                            name="country"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCurrency">
                        <Form.Label>Main currency</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Congolese franc"
                            name="currency"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPM">
                        <Form.Label>Main payment method</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="MPesa"
                            name="paymentMethod"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}><span className={"me-2"}><i><FaCity/></i></span>Add
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddCountryModal;