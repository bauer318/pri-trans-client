import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const CountryCard = ({countryId}) => {
    const country = useSelector(state => state.countries.find(country => country.id === countryId));
    const currencies = country.currencies;
    const paymentMethods = country.paymentMethods;
    return (
        <div className={"col"}>
            <div className={"card mb-3 card-element"}>
                {
                    <NavLink to={`/countries/${countryId}`}>
                        <div className={"card-header"}>
                            {country.country}
                        </div>
                    </NavLink>
                }
                <div className={"card-body country-card row"}>
                    <div className={"col"}>
                        {
                            currencies.map(currency =>
                                <p key={currency.id}>{currency.currency}</p>
                            )
                        }
                    </div>
                    <div className={"col"}>
                        {paymentMethods.map(paymentMethod =>
                            <p key={paymentMethod.id}>{paymentMethod.paymentMethod}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;