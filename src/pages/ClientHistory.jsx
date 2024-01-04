import React, {useEffect} from 'react';
import HistoryHeader from "../components/HistoryHeader";
import {useDispatch, useSelector} from "react-redux";
import {getOrderHistory} from "../reducers/orderReducer";
import {getItem} from "../services/LocalStorageService";
import TransactionStatusTdComponent from "../components/transactionStatusTdComponent";

const ClientHistory = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        dispatch(getOrderHistory(connectedUser?.userId, true));
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
                        <th scope={"col"} className={"text-center"}>Main amount</th>
                        <th scope={"col"} className={"text-center"}>Paid amount</th>
                        <th scope={"col"} className={"text-center"}>Recipient</th>
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
                                <td className={"text-center"}>{transaction?.paidAmount}
                                    <mark>{transaction?.currencySymbol}</mark>
                                </td>
                                <td className={"text-center"}>{transaction?.recipient}</td>
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

export default ClientHistory;