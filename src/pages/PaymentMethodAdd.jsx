import React, {useEffect, useState} from 'react';
import PaymentMethodAddHeader from "../components/PaymentMethodAddHeader";
import PaymentMethodAddTable from "../components/PaymentMethodAddTable";
import {useDispatch} from "react-redux";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";
import LoadingEffect from "../components/LoadingEffect";

const PaymentMethodAdd = () => {
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        dispatch(initializePaymentMethods(callBack))
    }, []);
    return (
        <div className={"container"}>
            <PaymentMethodAddHeader/>
            <div className={"row mt-2"}>
                <PaymentMethodAddTable/>
            </div>
            {canWait && <LoadingEffect/>}
        </div>
    );
};

export default PaymentMethodAdd;