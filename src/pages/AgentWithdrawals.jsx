import React, {useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {GiConfirmed} from "react-icons/gi";
import {MdDoNotDisturbAlt} from "react-icons/md";
import ConfirmWithdrawModal from "../modals/ConfirmWithdrawModal";
import RejectWithdrawalsModal from "../modals/RejectWithdrawalsModal";

const AgentWithdrawals = () => {
    console.log('Agent withdrawals');
    const [selectedWithdraw, setSelectedWithdraw] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);

    const withdrawals = [
        {
            id: 1,
            dateTime: "2023-16-05 22:12",
            amount: 251.12,
            paymentMethod: {
                id: 3,
                paymentMethod: 'Sberbank',
                number: '245-8952',
            },
            status: 'requested'
        },
        {
            id: 2,
            dateTime: "2023-16-05 22:12",
            amount: 100,
            paymentMethod: {
                id: 2,
                paymentMethod: 'Airtel money',
                number: '245-Dere',
            },
            status: 'requested'
        }
    ];
    const findWithdrawalById = id => withdrawals?.find(withdrawal=>withdrawal.id===id);
    const handleConfirmModal = () => {
        setShowConfirmModal(!showConfirmModal);
    }
    const handleRejectModal = ()=>{
        setShowRejectModal(!showRejectModal);
    }
    const handleConfirmWithdraw = id =>{
        setSelectedWithdraw(findWithdrawalById(id));
        handleConfirmModal();
    }
    const handleRejectWithdraw = id =>{
        setSelectedWithdraw(findWithdrawalById(id));
        handleRejectModal();
    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Withdrawals"}/>
            <table className={"table table-success table-striped table-bordered table-responsive mt-3"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"}>Date and time</th>
                    <th scope={"col"}>Amount</th>
                    <th scope={"col"}>Client wallet's number</th>
                    <th scope={"col"}>Payment method</th>
                    <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {withdrawals?.map(withdrawal =>
                    <tr key={withdrawal?.id}>
                        <td>{withdrawal?.dateTime}</td>
                        <td>{withdrawal?.amount}</td>
                        <td>{withdrawal?.paymentMethod.number}</td>
                        <td>{withdrawal?.paymentMethod?.paymentMethod}</td>
                        <td className={"text-center"} onClick={() => handleConfirmWithdraw(withdrawal?.id)}><GiConfirmed/>
                        </td>
                        <td className={"text-center"} onClick={() => handleRejectWithdraw(withdrawal?.id)}>
                            <MdDoNotDisturbAlt/></td>
                    </tr>
                )}
                </tbody>
            </table>
            {
                selectedWithdraw && showConfirmModal &&
                <ConfirmWithdrawModal handleModal={handleConfirmModal} showModal={showConfirmModal} isAgent={true} withdrawDetails={selectedWithdraw}/>
            }
            {
                selectedWithdraw && showRejectModal &&
                <RejectWithdrawalsModal withdrawDetails={selectedWithdraw} showModal={showRejectModal} handleModal={handleRejectModal}/>
            }
        </div>
    );
};

export default AgentWithdrawals;