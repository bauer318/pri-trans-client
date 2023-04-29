import React from 'react';
import CurrencyAddHeader from "../components/CurrencyAddHeader";
import CurrencyAddTable from "../components/CurrencyAddTable";

const CurrencyAdd = () => {
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