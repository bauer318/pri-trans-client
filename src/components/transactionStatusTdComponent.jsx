import React from 'react';

const TransactionStatusTdComponent = ({transaction}) => {
    return (
        <div className={"text-center card-header"}
           style={{
               background: transaction.status === 'processing' ? "yellow"
                   : transaction.status === 'completed' ? "green"
                       : transaction.status === 'partially' ? "gray"
                           : transaction.status === 'requested' ? "orange" : "red"
           }}>
                                    <span
                                        style={{
                                            color: transaction.status === 'processing' ? "black"
                                                : transaction.status === 'completed' ? "yellow"
                                                    : transaction.status === 'rejected' ? "white" : "black"
                                        }}>{transaction.status}</span>
        </div>
    );
};

export default TransactionStatusTdComponent;