import React, {useState} from 'react';
import {FaBackward} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import RemoveCurrencyFromCountryModal from "../modals/RemoveCurrencyFromCountryModal";
import RemovePaymentMethodFromCountryModal from "../modals/RemovePaymentMethodFromCountryModal";
import {useMatch, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";
import {Form} from "react-bootstrap";
import {updateCountry} from "../reducers/countryReducers";
import {getCountryByName} from "../services/Utils";


const CountryEdit = () => {
    const [showCurrencyModal, setShowCurrencyModal] = useState(false);
    const [showPMModal, setShowPMModal] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();
    const [selectedCurrency, setSelectedCurrency] = useState();
    const match = useMatch('/admin/countries/:id/edit');
    const countryId = Number(match.params.id);
    const country = useSelector(state => state.countries.find(country => country.countryId === countryId));
    const [countryName, setCountryName] = useState(country.countryName);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }

    const handleCurrencyModal = (selectedCurrencyIdParam) => {
        const selectedCurrency = country.currencies.find(currency => currency.currencyId === selectedCurrencyIdParam);
        setSelectedCurrency(selectedCurrency);
        setShowCurrencyModal(!showCurrencyModal);
    }

    const handlePMModal = (selectedPaymentMethodIdParam) => {
        const selectedPM = country.paymentMethods.find(pm => pm.paymentMethodeId === selectedPaymentMethodIdParam);
        setShowPMModal(!showPMModal);
        setSelectedPaymentMethod(selectedPM);
    }

    const handleEmailChange = (event) => {
        const countryName = event.target.value;
        setCountryName(countryName);
    }

    const handleSubmitCountryName = (event) => {
        event.preventDefault();
        const countryFromAPI = getCountryByName(countryName);
        const updatedCountry = {
            ...countryFromAPI,
            currencies: country.currencies,
            paymentMethods: country.paymentMethods
        }
        dispatch(updateCountry(countryId, updatedCountry, callBack));
        navigate('/admin/countries');
    }
    const handleCancelClick = () => {
        navigate('/admin/countries');
    }

    return (
        <>{country ? (
            <div className={"row mt-2"}>
                <div className={"col-4"}>
                    <div>
                        <Form onSubmit={handleSubmitCountryName} className={'mt-2'}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><h3>Country</h3></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="country"
                                    defaultValue={country?.countryName}
                                    required={true}
                                    onChange={handleEmailChange}
                                />
                            </Form.Group>
                            <button className={"btn btn-primary mt-2"}>Save country name</button>
                        </Form>
                    </div>
                    <div>
                        <button className={"btn btn-info mt-2"} onClick={() => handleCancelClick()}><span
                            className={"ps-2 pe-2"}><FaBackward/></span>Back
                        </button>
                    </div>
                </div>
                <div className={"col-4"}>
                    <div>
                        <h1>Currencies</h1>
                        <table className={"table table-success table-striped table-bordered table-responsive"}>
                            <tbody>
                            {
                                country?.currencies.map(currency =>
                                    <tr key={currency.currencyId}>
                                        <td className={"text-start"}>{currency.currency}</td>
                                        <td className={"text-center"}
                                            onClick={() => handleCurrencyModal(currency.currencyId)}>
                                            <MdDeleteForever/></td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={"col-4"}>
                    <div>
                        <h1>Payment methods</h1>
                        <table className={"table table-success table-striped table-bordered table-responsive"}>
                            <tbody>
                            {
                                country?.paymentMethods.map(pm =>
                                    <tr key={pm?.paymentMethodId}>
                                        <td className={"text-start"}>{pm.paymentMethod}</td>
                                        <td className={"text-center"} onClick={() => handlePMModal(pm.paymentMethodId)}>
                                            <MdDeleteForever/></td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                {selectedCurrency &&
                    <RemoveCurrencyFromCountryModal country={country?.countryName} selectedCurrency={selectedCurrency}
                                                    handleModal={handleCurrencyModal} showModal={showCurrencyModal}/>}
                {selectedPaymentMethod &&
                    <RemovePaymentMethodFromCountryModal country={country?.countryName}
                                                         selectedPaymentMethod={selectedPaymentMethod}
                                                         handleModal={handlePMModal} showModal={showPMModal}/>}
            </div>) : (<LoadingEffect/>)}
        </>
    );
};

export default CountryEdit;