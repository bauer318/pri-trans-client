import React, {useEffect, useState} from 'react';
import {MdDoneOutline} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {initializePaymentMethods} from "../reducers/paymentMethodReducers";
import LoadingEffect from "./LoadingEffect";
import {useMatch, useNavigate, useNavigation} from "react-router-dom";
import {addPaymentMethod} from "../reducers/countryReducers";
import BackToCountryMainPageComponent from "./BackToCountryMainPageComponent";
import {FaBackward} from "react-icons/fa";

const PaymentMethodAddTable = () => {
    const dispatch = useDispatch();
    const pm = useSelector(state => state.paymentMethods);
    const match = useMatch('/admin/countries/:id/add-payment-method');
    const countryId = Number(match.params.id);
    const country = useSelector(state => state.countries.find(country => country.countryId === countryId));
    const countryPaymentMethods = country?.paymentMethods;
    const [refreshTable, setRefreshTable] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        setIsLoading(true);
        console.log(refreshTable);
        setIsLoading(false);
    }, [refreshTable]);
    const containsPaymentMethod = paymentMethodId => {
        for (let i = 0; i < countryPaymentMethods.length; i++) {
            if (countryPaymentMethods[i].paymentMethodId === paymentMethodId) {
                return true;
            }
        }
        return false;
    }

    const paymentMethodsToAdd = () => {
        const result = [];
        pm.map(paymentMethod => {
            if (!containsPaymentMethod(paymentMethod.paymentMethodId)) {
                result.push(paymentMethod);
            }
        });
        return result;
    }

    const handleAddPaymentMethodClick = paymentMethodId => {
        const addedPaymentMethod = pm.find(paymentMethod => paymentMethod.paymentMethodId === paymentMethodId);
        dispatch(addPaymentMethod(countryId, addedPaymentMethod));
        setRefreshTable(!refreshTable);
    }
    return (
        <div>
            {isLoading && <LoadingEffect/>}
            {(pm?.length > 0 && paymentMethodsToAdd()?.length === 0) ?
                <BackToCountryMainPageComponent text={"No payment to add"}/> :
                <table className={"table table-success table-striped table-bordered table-responsive"}>
                    <thead className={"table-light"}>
                    <tr>
                        <th scope={"col"} className={"text-center"}>Payment method</th>
                        <th scope={"col"} className={"text-center"}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        pm?.length > 0 ? (
                            paymentMethodsToAdd()?.map(paymentMethod =>
                                <tr key={paymentMethod.paymentMethodId}>
                                    <td className={"text-center"}>{paymentMethod.paymentMethod}</td>
                                    <td className={"text-center"}>
                                        <button className={"btn btn-secondary"}
                                                onClick={() => handleAddPaymentMethodClick(paymentMethod.paymentMethodId)}>Add
                                        </button>
                                    </td>
                                </tr>
                            )
                        ) : (
                            <LoadingEffect/>
                        )
                    }
                    </tbody>
                </table>
            }
            <div>
                <button className={"btn btn-info"}
                        onClick={() => navigate(`/admin/countries/${countryId}`)}><span
                    className={"ps-2 pe-2"}><FaBackward/></span>Back
                </button>
            </div>
        </div>
    )
        ;
};

export default PaymentMethodAddTable;