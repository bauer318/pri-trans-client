import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaCity} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {createCountry} from "../reducers/countryReducers";
import {initializeCurrencies} from "../reducers/currencyReducers";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";
import {getCountryByName} from "../services/Utils";

const AddCountryModal = ({showModal, handleModal}) => {
    const [country, setCountry] = useState();
    const [mainCountryCurrency, setMainCountryCurrency] = useState([]);
    const [mainCountryPaymentMethod, setMainCountryPaymentMethod] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializePaymentMethods())
    }, []);
    useEffect(() => {
        dispatch(initializeCurrencies())
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const countryFromAPI = getCountryByName(country);
        const newCountry = {
            countryName:countryFromAPI?.name,
            countryCode:countryFromAPI?.code,
            countryIso:countryFromAPI?.iso,
            phoneCode:countryFromAPI?.phoneCode,
            currencies: [mainCountryCurrency],
            paymentMethods: [mainCountryPaymentMethod]
        }
        dispatch(createCountry(newCountry));
        handleModal();
    };
    const currencies = useSelector(state => state.currencies);
    const pm = useSelector(state => state.paymentMethods);

    const handleChange = (event) => {
        const country = event.target.value;
        setCountry(country);
    };
    const handleCurrencyChange = (event) => {
        const currencyId = event.target.value;
        const selectedCurrency = currencies.find(currency => currency.currencyId === Number(currencyId));
        setMainCountryCurrency(selectedCurrency);
    }
    const handlePMChange = (event) => {
        const pmId = event.target.value;
        const selectedPm = pm.find(pmEl => pmEl.id === Number(pmId));
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
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="DR Congo"
                            name="country"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicMainCurrency">
                        <Form.Label>Main currency</Form.Label>
                        <Form.Control as="select"
                                      name="currencies"
                                      required={true}
                                      onChange={handleCurrencyChange}
                        >
                            <option value="">Select main currency</option>
                            {currencies.map((currency, key) =>
                                    <option value={currency.currencyId} key={key}>{currency.currency}</option>)
                            }

                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicMainPM">
                        <Form.Label>Main currency</Form.Label>
                        <Form.Control as="select"
                                      name="method"
                                      required={true}
                                      onChange={handlePMChange}
                        >
                            <option value="">Select main payment method</option>
                            {
                                pm.map(pmEl =>
                                    <option value={pmEl.id} key={pmEl.id}>{pmEl.method}</option>
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