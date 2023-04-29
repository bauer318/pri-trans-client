import React from 'react';
import {GrCurrency} from "react-icons/gr";
import LogoutBtn from "./LogoutBtn";

const CurrencyAddHeader = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-center"}>
                    <h3>Add currencies to RD Congo</h3>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default CurrencyAddHeader;