import React, {useEffect} from 'react';
import HistoryHeader from "../components/HistoryHeader";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../services/LocalStorageService";
import {getOrderHistory} from "../reducers/orderReducer";
import TransactionStatusTdComponent from "../components/transactionStatusTdComponent";

const AgentHistory = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        dispatch(getOrderHistory(connectedUser?.userId, false));
    }, []);
    const transactions = useSelector(state => state.orders);
    return (
        <div className={"container"}>
            <HistoryHeader/>
            <div className={"mt-3"}>
                <table className={"table table-success table-bordered table-responsive"}>
                    <thead className={"table-light"}>
                    <tr>
                        <th scope={"col"} className={"text-center"}>Date time</th>
                        <th scope={"col"} className={"text-center"}>Type</th>
                        <th scope={"col"} className={"text-center"}>Amount</th>
                        <th scope={"col"} className={"text-center"}>Client</th>
                        <th scope={"col"} className={"text-center"}>Reference</th>
                        <th scope={"col"} className={"text-center"}>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        transactions?.map((transaction, key) =>
                            <tr key={key}>
                                <td className={"text-center"}>{transaction?.createdAt ? transaction.createdAt : "No date"}</td>
                                <td className={"text-center"}>{transaction?.type}</td>
                                <td className={"text-center"}>{transaction?.amount}
                                    <mark>{transaction?.currencySymbol}</mark>
                                </td>
                                <td className={"text-center"}>{transaction?.client}</td>
                                <td className={"text-center"}>{transaction?.reference === "" ? "No ref" : transaction.reference}</td>
                                <TransactionStatusTdComponent transaction={transaction}/>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgentHistory;