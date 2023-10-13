import React from 'react';
import HistoryHeader from "../components/HistoryHeader";

const ClientHistory = () => {
    const transactions = [
        {
            id: 1,
            dateTime: '2023.05.16 23:20',
            type: 'transfer',
            amountMain: 100.25,
            amountPaid: 25.00,
            recipient: 'bauer@gmail.com',
            status: 'processing',
            ref: ''
        },
        {
            id: 2,
            dateTime: '2023.05.16 23:20',
            type: 'withdraw',
            amountMain: 250.00,
            amountPaid: 250.00,
            recipient: 'connected@user.com',
            status: 'completed',
            ref: ''
        },
        {
            id: 3,
            dateTime: '2023.05.16 23:20',
            type: 'deposit',
            amountMain: 100.00,
            amountPaid: 0.00,
            recipient: '245-895',
            status: 'rejected',
            ref: 2541,
        },

    ]
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
                        transactions?.map(transaction =>
                            <tr key={transaction.id}>
                                <td className={"text-center"}>{transaction.dateTime}</td>
                                <td className={"text-center"}>{transaction.type}</td>
                                <td className={"text-center"}>{transaction.amountMain}</td>
                                <td className={"text-center"}>{transaction.amountPaid}</td>
                                <td className={"text-center"}>{transaction.recipient}</td>
                                <td className={"text-center"}>{transaction.ref}</td>
                                <td className={"text-center"}
                                    style={{background: transaction.status === 'processing' ? "yellow" : transaction.status === 'completed' ? "green" : "red"}}>
                                    <span style={{color: transaction.status === 'processing' ? "black" : transaction.status === 'completed' ? "yellow" : "black"}}>{transaction.status}</span></td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientHistory;