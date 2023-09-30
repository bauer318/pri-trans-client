import React, {useEffect, useState} from 'react';
import CurrencyHeader from "../components/CurrencyHeader";
import CurrencyTable from "../components/CurrencyTable";
import {useDispatch} from "react-redux";
import {initializeCurrencies} from "../reducers/currencyReducers";
import LoadingEffect from "../components/LoadingEffect";

const CurrencyList = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        dispatch(initializeCurrencies());
        setIsLoading(false);
    }, []);
    return (
        <div className={"container"}>
            <CurrencyHeader/>
            {isLoading && <LoadingEffect/>}
            <div className={"row mt-2"}>
                <CurrencyTable/>
            </div>
        </div>
    );
};

export default CurrencyList;