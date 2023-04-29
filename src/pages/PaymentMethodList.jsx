import React from 'react';
import PaymentMethodHeader from "../components/PaymentMethodHeader";
import PaymentMethodTable from "../components/PaymentMethodTable";

const PaymentMethodList = () => {
    return (
        <div className={"container"}>
            <PaymentMethodHeader/>
            <div className={"row mt-2"}>
                <PaymentMethodTable/>
            </div>
        </div>
    );
};

export default PaymentMethodList;