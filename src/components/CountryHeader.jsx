import React from 'react';
import LogoutBtn from "./LogoutBtn";
import {FaCity} from "react-icons/fa";

const CountryHeader = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <button className={"btn btn-primary"}>
                        <span><i><FaCity/></i></span> Add country
                    </button>
                </div>
                <div className={"col-lg-9 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default CountryHeader;