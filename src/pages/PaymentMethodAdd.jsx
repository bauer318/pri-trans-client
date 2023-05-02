import React, {useEffect} from 'react';
import PaymentMethodAddHeader from "../components/PaymentMethodAddHeader";
import PaymentMethodAddTable from "../components/PaymentMethodAddTable";
import {useDispatch} from "react-redux";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";

const PaymentMethodAdd = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(initializePaymentMethods())
    },[]);
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