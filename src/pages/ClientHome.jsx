import React from 'react';
import HomeHeader from "../components/HomeHeader";
import HomeTable from "../components/HomeTable";
import {useSelector} from "react-redux";

const ClientHome = () => {
    const countries = useSelector(state => state.countries);
    return (
        <div className={"container"}>
            <HomeHeader/>
            <div className={"row mt-2"}>
                <div className={"col-lg-6"}>
                    <HomeTable fromCountry={"Russia"} toCountry={"DR Congo"}/>
                </div>
                <div className={"col-lg-6"}>
                    <HomeTable fromCountry={"DR Congo"} toCountry={"Russia"}/>
                </div>
            </div>
        </div>
    );
};

export default ClientHome;