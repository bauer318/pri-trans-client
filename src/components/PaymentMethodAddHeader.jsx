import React from 'react';
import LogoutBtn from "./LogoutBtn";

const PaymentMethodAddHeader = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-6 d-flex justify-content-center"}>
                    <h3>Add payment methods to RD Congo</h3>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodAddHeader;