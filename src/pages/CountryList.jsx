import React from 'react';
import CountryHeader from "../components/CountryHeader";
import CountryCard from "../components/CountryCard";

const CountryList = () => {
    return (
        <div className={"container"}>
            <CountryHeader/>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                <CountryCard/>
                <CountryCard/>
                <CountryCard/>
                <CountryCard/>
                <CountryCard/>
                <CountryCard/>
                <CountryCard/>
                <CountryCard/>
            </div>
        </div>
    );
};

export default CountryList;