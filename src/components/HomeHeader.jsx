import React, {useEffect} from 'react';
import LogoutBtn from "./LogoutBtn";
import {useDispatch, useSelector} from "react-redux";
import {initializeCountries} from "../reducers/countryReducers";

const HomeHeader = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeCountries());
    }, []);
    const countries = useSelector(state => state.countries);
    const handleRecipientCountrySelectChange = (event) => {
        const selectedCountry = event.target.value;
    }
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-start"}>
                    <h2>Recipient's country </h2>
                </div>
                <div className={"col-lg-3 d-flex justify-content-start"}>
                    <select className={"form-select"} aria-label={"Default select example"}
                            onChange={handleRecipientCountrySelectChange}>
                        {countries?.map((country, key)=> <option value={country?.countryId} key={key}>{country?.countryName}</option>)}
                    </select>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;