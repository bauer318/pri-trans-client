import React, {useEffect, useState} from 'react';
import AccountHeader from "../components/AccountHeader";
import BalanceCard from "../components/BalanceCard";
import {useDispatch, useSelector} from "react-redux";
import {initializeAccounts} from "../reducers/accountReducer";
import LoadingEffect from "../components/LoadingEffect";

const UserAccount = () => {
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    const [canWait, setCanWait] = useState(false);

    const callBack = () => {
        setCanWait(false);
    }
    const performRefresh = () => {
        setRefresh(!refresh);
    }
    useEffect(() => {
        setCanWait(true);
        dispatch(initializeAccounts(callBack));
    }, [refresh]);
    const accounts = useSelector(state => state.accounts);
    return (
        <div className={"container"}>
            <AccountHeader perform={performRefresh}/>
            <h2 className={"mt-2"}>Account</h2>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2"}>
                {accounts && accounts?.map((account, key) => <BalanceCard account={account} key={key}/>)}
            </div>
            {canWait && <div className={'text-center'}><LoadingEffect/></div>}
        </div>
    );
};

export default UserAccount;