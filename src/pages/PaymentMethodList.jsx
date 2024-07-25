import React, {useEffect, useState} from 'react';
import PaymentMethodHeader from "../components/PaymentMethodHeader";
import PaymentMethodTable from "../components/PaymentMethodTable";
import {useDispatch} from "react-redux";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";
import LoadingEffect from "../components/LoadingEffect";

const PaymentMethodList = () => {
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
            <PaymentMethodHeader/>
            <div className={"row mt-2"}>
                <PaymentMethodTable/>
            </div>
            {canWait && <LoadingEffect/>}
        </div>
    );
};

export default PaymentMethodList;