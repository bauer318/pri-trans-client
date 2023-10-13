import React, {useEffect, useState} from 'react';
import {FaBackward, FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import {useMatch, useNavigate} from "react-router-dom";
import DeleteCountryModal from "../modals/DeleteCountryModal";
import {useDispatch, useSelector} from "react-redux";
import {initializeCountries} from "../reducers/countryReducers";
import LoadingEffect from "./LoadingEffect";
import {initializeCurrencies} from "../reducers/currencyReducers";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";

const Country = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const match = useMatch('/admin/countries/:id');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(initializeCountries());
        dispatch(initializeCurrencies());
        dispatch(initializePaymentMethods());
    }, []);

    const countryId = Number(match.params.id);
    const country = useSelector(state => state.countries.find(country => country.countryId === countryId));

    const currencies = country?.currencies;
    const paymentMethods = country?.paymentMethods;
    const handleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            {country ?
                (<div className={"row mt-2"}>
                    <div className={"col-4"}>
                        <div>
                            <h1>{country?.countryName}</h1>
                        </div>
                        <div>
                            <button className={"btn btn-primary mt-2"}
                                    onClick={() => navigate(`/admin/countries/${countryId}/edit`)}><span
                                className={"ps-2 pe-2"}><i><FaEdit/></i></span>Edit
                            </button>
                        </div>
                        <div>
                            <button disabled={true} className={"btn btn-danger mt-2"}
                                    onClick={() => handleModal()}><span
                                className={"ps-2 pe-2"}><MdDeleteForever/></span>Delete
                            </button>
                        </div>
                        <div>
                            <button className={"btn btn-info mt-2"} onClick={()=>navigate('/admin/countries')}><span
                                className={"ps-2 pe-2"}><FaBackward/></span>Back</button>
                        </div>
                    </div>
                    <div className={"col-4"}>
                        <div>
                            <h1>Currencies</h1>
                            <table className={"table table-success table-striped table-bordered table-responsive"}>
                                <tbody>
                                {currencies ? (
                                    currencies.map(currency =>
                                        <tr key={currency.currencyId}>
                                            <td className={"text-start"}>{currency.currency}</td>
                                        </tr>
                                    )) : (
                                    <LoadingEffect/>
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
                                {paymentMethods ?
                                    (paymentMethods.map(pm =>
                                        <tr key={pm.paymentMethodId}>
                                            <td className={"text-start"}>{pm.paymentMethod}</td>
                                        </tr>
                                    )) : (
                                        <LoadingEffect/>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {showModal &&
                        <DeleteCountryModal handleModal={handleModal} showModal={showModal} country={country}/>}
                </div>) : (
                    <LoadingEffect/>
                )}
        </>
    );
};

export default Country;