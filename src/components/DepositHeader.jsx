import React from 'react';
import {useNavigate} from "react-router-dom";

const DepositHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={"row"}>
            <div className={"col-lg-6 d-flex justify-content-start"}>
                <button className={"btn btn-info"} onClick={()=>navigate("/client/account/deposit/confirm")}>Confirmer le dépôt en attente</button>
            </div>
        </div>
    );
};

export default DepositHeader;