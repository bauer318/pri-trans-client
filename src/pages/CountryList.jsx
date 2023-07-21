import React, {useEffect} from 'react';
import CountryHeader from "../components/CountryHeader";
import CountryCard from "../components/CountryCard";
import {useDispatch, useSelector} from "react-redux";
import {initializeCountries} from "../reducers/countryReducers";
import LoadingEffect from "../components/LoadingEffect";

const CountryList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeCountries())
    }, []);
    const countries = useSelector(state => state.countries);
    console.log(countries);
    return (
        <div className={"container"}>
            <CountryHeader/>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                {countries ? (
                    countries.map(country =>
                        <CountryCard key={country.countryId} countryId={country.countryId}/>
                    )) : (<LoadingEffect/>)
                }
            </div>
        </div>
    );
};
export default CountryList;