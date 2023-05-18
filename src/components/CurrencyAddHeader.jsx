import React, {useEffect} from 'react';
import LogoutBtn from "./LogoutBtn";
import {useMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {initializeCountries} from "../reducers/countryReducers";

const CurrencyAddHeader = () => {
    const dispatch = useDispatch();
    const match = useMatch('admin/countries/:id/add-currency');
    const countryId = Number(match?.params.id);
    useEffect(()=>{
        dispatch(initializeCountries());
    },[]);
    const country = useSelector(state=>state.countries.find(country=>country.id===countryId));
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-center"}>
                    <h3>Add currencies to {country?.country}</h3>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default CurrencyAddHeader;