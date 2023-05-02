import React, {useEffect} from 'react';
import CurrencyAddHeader from "../components/CurrencyAddHeader";
import CurrencyAddTable from "../components/CurrencyAddTable";
import {useDispatch} from "react-redux";
import {initializeCurrencies} from "../reducers/currencyReducers";

const CurrencyAdd = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(initializeCurrencies)
    },[]);
    return (
        <div className={"container"}>
            <CurrencyAddHeader/>
            <div className={"row mt-2"}>
                <CurrencyAddTable/>
            </div>
        </div>
    );
};

export default CurrencyAdd;