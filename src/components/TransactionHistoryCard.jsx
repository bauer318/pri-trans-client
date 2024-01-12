import React from 'react';
import {roundValue} from "../services/Utils";
import TransactionStatusTdComponent from "./transactionStatusTdComponent";

const TransactionHistoryCard = ({transaction}) => {
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistoryCard;