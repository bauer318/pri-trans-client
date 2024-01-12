import React, {useEffect, useState} from 'react';
import LogoutBtn from "./LogoutBtn";
import {useDispatch, useSelector} from "react-redux";
import {useMatch} from "react-router-dom";
import {initializeCountries} from "../reducers/countryReducers";
import LoadingEffect from "./LoadingEffect";

const PaymentMethodAddHeader = () => {
    const dispatch = useDispatch();
    const match = useMatch('admin/countries/:id/add-payment-method');
    const [canWait, setCanWait] = useState(false);
    const countryId = Number(match?.params.id);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        setCanWait(true);
        dispatch(initializeCountries(callBack));
    }, []);
    const country = useSelector(state => state.countries.find(country => country.countryId === countryId));
    return (
        <div>
            {canWait && <div className={"text-center"}><LoadingEffect/></div>}
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-center"}>
                    <h3>Add payment methods to {country?.countryName}</h3>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodAddHeader;