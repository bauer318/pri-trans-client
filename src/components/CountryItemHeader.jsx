import React from 'react';
import {FaExchangeAlt} from "react-icons/fa";
import LogoutBtn from "./LogoutBtn";
import {GrCurrency} from "react-icons/gr";
import {useMatch, useNavigate} from "react-router-dom";

const CountryItemHeader = () => {
    const navigate = useNavigate();
    const match = useMatch('countries/:id');
    const countryId = Number(match?.params.id);
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <button className={"btn btn-primary"} onClick={()=>navigate(`/countries/${countryId}/add-currency`)}>
                        <span><i><GrCurrency/></i></span> Add currency
                    </button>
                </div>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <button className={"btn btn-primary"} onClick={()=>navigate(`/countries/${countryId}/add-payment-method`)}>
                        <span><i><FaExchangeAlt/></i></span> Add payment method
                    </button>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default CountryItemHeader;