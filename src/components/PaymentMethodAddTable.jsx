import React, {useEffect} from 'react';
import {MdDoneOutline} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";
import LoadingEffect from "./LoadingEffect";

const PaymentMethodAddTable = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializePaymentMethods())
    }, []);
    const pm = useSelector(state => state.paymentMethods);
    return (
        <div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Payment method</th>
                    <th scope={"col"} className={"text-center"}>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    pm ? (
                        pm.map(method =>
                            <tr key={method.id}>
                                <td className={"text-center"}>{method.paymentMethod}</td>
                                {/*Here we will put a condition, if this payment method is already assigned we will display this
                             <td className={"text-center"} style={{color: "green"}}><MdDoneOutline/></td>
                             else user can add it
                            */
                                }
                                <td className={"text-center"}>Add</td>
                            </tr>
                        )
                    ) : (
                        <LoadingEffect/>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default PaymentMethodAddTable;