import React, {useEffect, useState} from 'react';
import HistoryHeader from "../components/HistoryHeader";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../services/LocalStorageService";
import {getOrderHistory} from "../reducers/orderReducer";
import AgentTransactionHistoryCard from "../components/AgentTransactionHistoryCard";
import LoadingEffect from "../components/LoadingEffect";

const AgentHistory = () => {
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        setCanWait(true);
        const connectedUser = getItem("connectedUser");
        dispatch(getOrderHistory(connectedUser?.userId, false, callBack));
    }, []);
    const transactions = useSelector(state => state.orders);
    return (
        <div className={"container"}>
            <HistoryHeader/>
            <div className={"row mt-3"}>

                {
                    transactions?.map((transaction, key) =>
                        <AgentTransactionHistoryCard key={key} transaction={transaction}/>)
                }
            </div>
            {
                canWait && <div className={"text-center"}><LoadingEffect/></div>
            }
        </div>
    );
};

export default AgentHistory;