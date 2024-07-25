import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaCity} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {createCountry} from "../reducers/countryReducers";
import {initializeCurrencies} from "../reducers/currencyReducers";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";
import {getCountryByName} from "../services/Utils";

const AddCountryModal = ({showModal, handleModal}) => {
    const [country, setCountry] = useState();
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = ()=>{
        setCanWait(false);
    }
    useEffect(() => {
        setCanWait(true);
        dispatch(initializePaymentMethods(callBack))
    }, []);
    useEffect(() => {
        dispatch(initializeCurrencies(callBack))
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const countryFromAPI = getCountryByName(country);
        const newCountry = {
            countryName:countryFromAPI?.name,
            countryCode:countryFromAPI?.code,
            countryIso:countryFromAPI?.iso,
            phoneCode:countryFromAPI?.phoneCode
        }
        dispatch(createCountry(newCountry));
        handleModal();
    };

    const handleChange = (event) => {
        const country = event.target.value;
        setCountry(country);
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
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"} disabled={canWait}><span className={"me-2"}><i><FaCity/></i></span>Add
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