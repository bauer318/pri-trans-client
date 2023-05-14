import React from 'react';
import LogoutBtn from "./LogoutBtn";

const DepositHeader = () => {
    return (
        <div className={"row"}>
            <div className={"col-lg-6 d-flex justify-content-start"}>
                <button className={"btn btn-info"}>Confirm deposit</button>
            </div>
            <div className={"col-lg-6 d-flex justify-content-end"}>
                <LogoutBtn/>
            </div>
        </div>
    );
};

export default DepositHeader;