import React from 'react';
import PaymentMethodAddHeader from "../components/PaymentMethodAddHeader";
import PaymentMethodAddTable from "../components/PaymentMethodAddTable";

const PaymentMethodAdd = () => {
    return (
        <div className={"container"}>
            <PaymentMethodAddHeader/>
            <div className={"row mt-2"}>
                <PaymentMethodAddTable/>
            </div>
        </div>
    );
};

export default PaymentMethodAdd;