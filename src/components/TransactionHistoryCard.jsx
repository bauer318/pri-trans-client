import React, {useEffect, useState} from 'react';
import {roundValue} from "../services/Utils";
import TransactionStatusTdComponent from "./transactionStatusTdComponent";
import {FcCancel} from "react-icons/fc";
import accountService from "../services/accountService";

const TransactionHistoryCard = ({transaction,refresh}) => {
    const [canWait, setCanWait] = useState(false);

    const callBack = () => {
        setCanWait(false);
        refresh();
    }
    const handleClickCancelTransfert = () => {
        setCanWait(true);
        accountService.cancelTransfert(transaction?.orderId, callBack).then(

        );
    }

    return (
        <div className={"col col-sm-auto col-md-auto col-lg-auto mt-2"}>
            <div className="card">
                <TransactionStatusTdComponent transaction={transaction}/>
                <div className="card-body">
                    <p className="card-text">
                        Type: {transaction?.type}
                    </p>
                    <p className="card-text">
                        Main amount: {roundValue(transaction?.amount)}
                        <mark>{transaction?.currencySymbol}</mark>
                    </p>
                    <p className="card-text">
                        Paid amount: {roundValue(transaction?.paidAmount)}
                        <mark>{transaction?.currencySymbol}</mark>
                    </p>
                    <p className="card-text">
                        Receiver: {transaction?.recipient}
                    </p>
                    <p className="card-text">
                        Reference: {transaction?.reference === "" ? "No ref" : transaction.reference}
                    </p>
                    <p className="card-text">
                        Note: {transaction?.note === "" ? "Without note" : transaction.note}
                    </p>
                    <div className="card-footer text-muted text-center">
                        {transaction?.createdAt ? transaction.createdAt : "No date"}
                        {canWait && <span>...</span>}
                        {!canWait && transaction?.type === 'transfert' && (transaction?.status === "requested" || transaction?.status === "partially") &&
                            <span className={"ms-2"}><FcCancel size={24} onClick={handleClickCancelTransfert}/></span>}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TransactionHistoryCard;