import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {GrCurrency} from "react-icons/gr";

const UpdateCurrency = ({showModal, handleModal, selectedCurrency, isDelete}) => {
    const [formData, setFormData] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
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
                <Modal.Title>{isDelete ? "Delete " : "Edit "} currency</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicCurrency">
                        <Form.Label>Currency</Form.Label>
                        <Form.Control
                            type="text"
                            name="currency"
                            defaultValue={selectedCurrency.currency}
                            required={true}
                            onChange={handleChange}
                            readOnly={isDelete}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicSymbol">
                        <Form.Label>Symbol</Form.Label>
                        <Form.Control
                            type="text"
                            name="symbol"
                            defaultValue={selectedCurrency.symbol}
                            required={true}
                            onChange={handleChange}
                            readOnly={isDelete}
                        />
                    </Form.Group>

                    <div className={"mt-2"}>
                        <button className={isDelete ? "btn btn-danger" : "btn btn-primary"} type={"submit"}>
                            <span className={"me-2"}><i><GrCurrency/></i></span>{isDelete ? "Delete" : "Save"}
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

export default UpdateCurrency;