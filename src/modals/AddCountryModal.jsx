import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaCity} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {createCountry} from "../reducers/countryReducers";
import {initializeCurrencies} from "../reducers/currencyReducers";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";

const AddCountryModal = ({showModal, handleModal}) => {
    const [country, setCountry] = useState();
    const [mainCountryCurrency, setMainCountryCurrency] = useState([]);
    const [mainCountryPaymentMethod, setMainCountryPaymentMethod] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(initializePaymentMethods())
    },[]);
    useEffect(()=>{
        dispatch(initializeCurrencies())
    },[]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newCountry = {
            country,
            currencies:[mainCountryCurrency],
            paymentMethods:[mainCountryPaymentMethod]
        }
        dispatch(createCountry(newCountry));
        console.log(newCountry);
        handleModal();
    };
    const currencies = useSelector(state => state.currencies);
    const pm = useSelector(state=>state.paymentMethods);
    const handleChange = (event) => {
        const country = event.target.value;
        setCountry(country);
    };
    const handleCurrencyChange = (event)=>{
        const currencyId = event.target.value;
        const selectedCurrency = currencies.find(cur=>cur.id===Number(currencyId));
        setMainCountryCurrency(selectedCurrency);
    }
    const handlePMChange = (event)=>{
        const pmId = event.target.value;
        const selectedPm = pm.find(pmEl=>pmEl.id===Number(pmId));
        setMainCountryPaymentMethod(selectedPm);
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add country</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicCountry">
                        <Form.Label className={"required"}>Country</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="DR Congo"
                            name="country"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCountryCode">
                        <Form.Label className={"required"}>Country Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="CG"
                            name="countryCode"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCountryIso">
                        <Form.Label className={"required"}>Country Iso</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="DRC"
                            name="countryIso"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCountryPhone">
                        <Form.Label className={"required"}>Phone code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="+243"
                            name="phoneCode"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicMainCurrency">
                        <Form.Label className={"required"}>Main currency</Form.Label>
                        <Form.Control as="select"
                                      name="currencies"
                                      required={true}
                                      onChange={handleCurrencyChange}
                        >
                            <option value="">Select main currency</option>
                            {
                                currencies.map(currency=>
                                    <option value={currency.id} key={currency.id}>{currency.currency}</option>
                                )
                            }

                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicMainPM">
                        <Form.Label className={"required"}>Main payment method</Form.Label>
                        <Form.Control as="select"
                                      name="paymentMethods"
                                      required={true}
                                      onChange={handlePMChange}
                        >
                            <option value="">Select main payment method</option>
                            {
                                pm.map(pmEl=>
                                    <option value={pmEl.id} key={pmEl.id}>{pmEl.paymentMethod}</option>
                                )
                            }

                        </Form.Control>
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