import React, {useEffect, useState} from 'react';
import HistoryHeader from "../components/HistoryHeader";
import {useDispatch, useSelector} from "react-redux";
import {getOrderHistory} from "../reducers/orderReducer";
import {getItem} from "../services/LocalStorageService";
import TransactionHistoryCard from "../components/TransactionHistoryCard";
import LoadingEffect from "../components/LoadingEffect";

const ClientHistory = () => {
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        setCanWait(true);
        dispatch(getOrderHistory(connectedUser?.userId, true,callBack));
    }, []);

    const transactions = useSelector(state => state.orders);
    return (
        <div className={"container"}>
            <HistoryHeader/>
            <div className={"row mt-3"}>
                {canWait && <div className={"text-center"}><LoadingEffect/></div>}
                {
                    transactions?.map((transaction, key) =>
                        <TransactionHistoryCard key={key} transaction={transaction}/>)
                }

            </div>
        </div>
    );
};

export default ClientHistory;