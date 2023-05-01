import React, {useEffect} from 'react';
import CountryHeader from "../components/CountryHeader";
import CountryCard from "../components/CountryCard";
import {useDispatch, useSelector} from "react-redux";
import {initializeCountries} from "../reducers/countryReducers";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";
import {initializeCurrencies} from "../reducers/currencyReducers";

const CountryList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(initializeCountries())
    },[]);
    const countries = useSelector(state => state.countries);
    return (
        <div className={"container"}>
            <CountryHeader/>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                {
                    countries.map(country=>
                     <CountryCard key={country.id} countryId={country.id}/>
                    )
                }
            </div>
        </div>
    );
};
export default CountryList;