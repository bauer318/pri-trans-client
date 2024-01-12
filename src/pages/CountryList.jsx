import React, {useEffect, useState} from 'react';
import CountryHeader from "../components/CountryHeader";
import CountryCard from "../components/CountryCard";
import {useDispatch, useSelector} from "react-redux";
import {initializeCountries} from "../reducers/countryReducers";
import LoadingEffect from "../components/LoadingEffect";

const CountryList = () => {
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        setCanWait(true);
        dispatch(initializeCountries(callBack))
    }, []);
    const countries = useSelector(state => state.countries);
    return (
        <div className={"container"}>
            <CountryHeader/>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                {countries?.length > 0 ? (
                    countries?.map(country =>
                        <CountryCard key={country?.countryId} country={country}/>
                    )) : (<LoadingEffect/>)
                }
            </div>
            {canWait && <LoadingEffect/>}
        </div>
    );
};
export default CountryList;