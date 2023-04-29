import React from 'react';
import CurrencyHeader from "../components/CurrencyHeader";
import CurrencyTable from "../components/CurrencyTable";

const CurrencyList = () => {
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