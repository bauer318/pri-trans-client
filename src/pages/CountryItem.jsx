import React from 'react';
import CountryItemHeader from "../components/CountryItemHeader";
import Country from "../components/Country";


const CountryItem = () => {
    return (
        <div className={"container"}>
            <CountryItemHeader/>
            <Country/>
        </div>
    );
};

export default CountryItem;