import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";

const CountryCard = ({countryId}) => {
    const country = useSelector(state => state.countries.find(country => country.countryId === countryId));
    const currencies = country?.currencies;
    const paymentMethods = country?.paymentMethods;
    return (
        <>{
            country ?
                (<div className={"col"}>
                    <div className={"card mb-3 card-element"}>
                        {
                            <NavLink to={`/admin/countries/${countryId}`}>
                                <div className={"card-header"}>
                                    {country.countryName}
                                </div>
                            </NavLink>
                        }
                        <div className={"card-body country-card row"}>
                            <div className={"col"}>
                                {currencies ? (
                                    currencies.map(currency =>
                                        <p key={currency.currencyId}>{currency.currency}</p>
                                    )) : (
                                    <LoadingEffect/>
                                )
                                }
                            </div>
                            <div className={"col"}>
                                {paymentMethods ? (
                                    paymentMethods.map(paymentMethod =>
                                        <p key={paymentMethod.paymentMethodId}>{paymentMethod.paymentMethod}</p>
                                    )) : (<LoadingEffect/>)}
                            </div>
                        </div>
                    </div>
                </div>) : (<LoadingEffect/>)}
        </>
    );
};

export default CountryCard;