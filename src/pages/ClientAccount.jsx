import React, {useEffect, useState} from 'react';
import AccountHeader from "../components/AccountHeader";
import BalanceCard from "../components/BalanceCard";
import {useDispatch, useSelector} from "react-redux";
import {initializeAccounts} from "../reducers/accountReducer";

const ClientAccount = () => {
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    const performRefresh = ()=>{
        setRefresh(!refresh);
    }
    useEffect(() => {
        dispatch(initializeAccounts());
    }, [refresh]);
    const accounts = useSelector(state => state.accounts);
    return (
        <div className={"container"}>
            <AccountHeader perform={performRefresh}/>
            <h2 className={"mt-2"}>Account</h2>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                {accounts && accounts?.map((account,key)=><BalanceCard account={account} key={key}/>)}
            </div>
        </div>
    );
};

export default ClientAccount;