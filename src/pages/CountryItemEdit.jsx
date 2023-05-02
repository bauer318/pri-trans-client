import React from 'react';
import CountryItemHeader from "../components/CountryItemHeader";
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