import React, {useEffect} from 'react';
import HistoryHeader from "../components/HistoryHeader";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../services/LocalStorageService";
import {getOrderHistory} from "../reducers/orderReducer";

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
                        transactions?.map(transaction =>
                            <tr key={transaction.id}>
                                <td className={"text-center"}>{transaction?.createdAt ? transaction.createdAt : "No date"}</td>
                                <td className={"text-center"}>{transaction?.type}</td>
                                <td className={"text-center"}>{transaction?.amount}</td>
                                <td className={"text-center"}>{transaction?.client}</td>
                                <td className={"text-center"}>{transaction?.reference === "" ? "No ref" : transaction.reference}</td>
                                <td className={"text-center"}
                                    style={{background: transaction.status === 'processing' ? "yellow" : transaction.status === 'completed' ? "green" : "red"}}>
                                    <span
                                        style={{color: transaction.status === 'processing' ? "black" : transaction.status === 'completed' ? "yellow" : "black"}}>{transaction.status}</span>
                                </td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgentHistory;