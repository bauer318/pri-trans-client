import React from 'react';
import LogoutBtn from "./LogoutBtn";
import {useNavigate} from "react-router-dom";

const DepositHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={"row"}>
            <div className={"col-lg-6 d-flex justify-content-start"}>
                <button className={"btn btn-info"} onClick={()=>navigate("/client/account/1/deposit/confirm")}>Confirm deposit</button>
            </div>
            <div className={"col-lg-6 d-flex justify-content-end"}>
                <LogoutBtn/>
            </div>
        </div>
    );
};

export default DepositHeader;