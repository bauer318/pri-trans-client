import React, {useState} from 'react';
import {FaSave} from "react-icons/fa";
import {MdCancel, MdDeleteForever} from "react-icons/md";
import RemoveCurrencyFromCountryModal from "../modals/RemoveCurrencyFromCountryModal";
import RemovePaymentMethodFromCountryModal from "../modals/RemovePaymentMethodFromCountryModal";
import {useMatch, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const CountryEdit = () => {
    const [showCurrencyModal, setShowCurrencyModal] = useState(false);
    const [showPMModal, setShowPMModal] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();
    const [selectedCurrency, setSelectedCurrency] = useState();

    const match = useMatch('countries/:id/edit');
    const countryId = Number(match.params.id);
    const country = useSelector(state => state.countries.find(country => country.id === countryId));
    const navigate = useNavigate();
    const handleCurrencyModal = (selectedCurrencyIdParam) => {
        const selectedCurrency = country.currencies.find(currency => currency.id === selectedCurrencyIdParam);
        setSelectedCurrency(selectedCurrency);
        setShowCurrencyModal(!showCurrencyModal);
    }

    const handlePMModal = (selectedPaymentMethodIdParam) => {
        const selectedPM = country.paymentMethods.find(pm=>pm.id===selectedPaymentMethodIdParam);
        setShowPMModal(!showPMModal);
        setSelectedPaymentMethod(selectedPM);
    }

    const handleCancelClick = () => {
        navigate('/countries');
    }

    return (
        <div className={"row mt-2"}>
            <div className={"col-4"}>
                <div>
                    <h1>{country.country}</h1>
                </div>
                <div>
                    <button className={"btn btn-primary mt-2"}><span className={"ps-2 pe-2"}><i><FaSave/></i></span>Save
                    </button>
                </div>
                <div>
                    <button className={"btn btn-info mt-2"} onClick={() => handleCancelClick()}><span
                        className={"ps-2 pe-2"}><MdCancel/></span>Cancel
                    </button>
                </div>
            </div>
            <div className={"col-4"}>
                <div>
                    <h1>Currencies</h1>
                    <table className={"table table-success table-striped table-bordered table-responsive"}>
                        <tbody>
                        {
                            country.currencies.map(currency =>
                                <tr key={currency.id}>
                                    <td className={"text-start"}>{currency.currency}</td>
                                    <td className={"text-center"} onClick={() => handleCurrencyModal(currency.id)}>
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
                            country.paymentMethods.map(pm =>
                                <tr key={pm.id}>
                                    <td className={"text-start"}>{pm.paymentMethod}</td>
                                    <td className={"text-center"} onClick={() => handlePMModal(pm.id)}>
                                        <MdDeleteForever/></td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedCurrency &&
            <RemoveCurrencyFromCountryModal country={country.country} selectedCurrency={selectedCurrency}
                                            handleModal={handleCurrencyModal} showModal={showCurrencyModal}/>}
            {selectedPaymentMethod &&
            <RemovePaymentMethodFromCountryModal country={country.country} selectedPaymentMethod={selectedPaymentMethod}
                                                 handleModal={handlePMModal} showModal={showPMModal}/>}
        </div>
    );
};

export default CountryEdit;