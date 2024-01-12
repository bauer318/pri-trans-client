import React from 'react';
import LogoutBtn from "./LogoutBtn";

const HistoryHeader = () => {
    return (
        <div className={"row"}>
            <div className={"col-lg-6 d-flex justify-content-start"}>
                <h3>Transaction history</h3>
            </div>
        </div>
    );
};

export default HistoryHeader;