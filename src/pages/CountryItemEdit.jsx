import React from 'react';
import CountryItemHeader from "../components/CountryItemHeader";
import Country from "../components/Country";
import CountryEdit from "../components/CountryEdit";

const CountryItemEdit = () => {
    return (
        <div className={"container"}>
            <CountryItemHeader/>
            <CountryEdit/>
        </div>
    );
};

export default CountryItemEdit;