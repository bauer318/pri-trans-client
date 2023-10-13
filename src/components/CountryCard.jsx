import React from 'react';
import {NavLink} from "react-router-dom";
import LoadingEffect from "./LoadingEffect";

const CountryCard = ({country}) => {
    return (
        <>{
            country ?
                (<div className={"col"}>
                    <div className={"card mb-3 card-element"}>
                        {
                            <NavLink to={`/admin/countries/${country?.countryId}`}>
                                <div className={"card-header"}>
                                    {country?.countryName}
                                </div>
                            </NavLink>
                        }
                        <div className={"card-body country-card row"}>
                            <div className={"col"}>
                                {country?.currencies ? (
                                    country.currencies.map(currency =>
                                        <p key={currency.currencyId}>{currency.currency}</p>
                                    )) : (
                                    <LoadingEffect/>
                                )
                                }
                            </div>
                            <div className={"col"}>
                                {country?.paymentMethods ? (
                                    country.paymentMethods.map(paymentMethod =>
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