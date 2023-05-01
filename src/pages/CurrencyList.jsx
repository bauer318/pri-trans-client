import React, {useEffect} from 'react';
import CurrencyHeader from "../components/CurrencyHeader";
import CurrencyTable from "../components/CurrencyTable";
import {useDispatch} from "react-redux";
import {initializeCurrencie} from "../reducers/currencyReducers";

const CurrencyList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(initializeCurrencie())
    },[]);
    return (
        <div className={"container"}>
            <CurrencyHeader/>
            <div className={"row mt-2"}>
                <CurrencyTable/>
            </div>
        </div>
    );
};

export default CurrencyList;