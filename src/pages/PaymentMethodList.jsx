import React, {useEffect} from 'react';
import PaymentMethodHeader from "../components/PaymentMethodHeader";
import PaymentMethodTable from "../components/PaymentMethodTable";
import {useDispatch} from "react-redux";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";

const PaymentMethodList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(initializePaymentMethods())
    },[]);
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