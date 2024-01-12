import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaCity} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deleteCountry} from "../reducers/countryReducers";
import {useNavigate} from "react-router-dom";

const DeleteCountryModal = ({showModal, handleModal, country}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCanWait(true);
        dispatch(deleteCountry(country?.countryId,callBack));
        navigate('/admin/countries');
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
                            value={country?.countryName}
                            readOnly={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCurrency">
                        <Form.Label>Main currency</Form.Label>
                        <Form.Control
                            type="text"
                            value={country?.currencies[0].currency}
                            readOnly={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPM">
                        <Form.Label>Main payment method</Form.Label>
                        <Form.Control
                            type="text"
                            readOnly={true}
                            value={country?.paymentMethods[0].paymentMethod}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-danger"} type={"submit"} disabled={canWait}><span
                            className={"me-2"}><i><FaCity/></i></span>Delete
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