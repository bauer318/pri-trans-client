import React from 'react';
import {FaCity} from "react-icons/fa";
import LogoutBtn from "./LogoutBtn";
import {GrCurrency} from "react-icons/gr";

const CurrencyHeader = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <button className={"btn btn-primary"}>
                        <span><i><GrCurrency/></i></span> Add currency
                    </button>
                </div>
                <div className={"col-lg-3"}>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Currency"
                            aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default CurrencyHeader;