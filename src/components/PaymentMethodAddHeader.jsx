import React, {useEffect} from 'react';
import LogoutBtn from "./LogoutBtn";
import {useDispatch, useSelector} from "react-redux";
import {useMatch} from "react-router-dom";
import {initializeCountries} from "../reducers/countryReducers";

const PaymentMethodAddHeader = () => {
    const dispatch = useDispatch();
    const match = useMatch('admin/countries/:id/add-payment-method');
    const countryId = Number(match?.params.id);
    useEffect(()=>{
       dispatch(initializeCountries());
    },[]);
    const country = useSelector(state => state.countries.find(country=>country.countryId===countryId));
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-center"}>
                    <h3>Add payment methods to {country?.countryName}</h3>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodAddHeader;