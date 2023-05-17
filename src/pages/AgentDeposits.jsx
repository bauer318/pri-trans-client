import React, {useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {MdDoNotDisturbAlt} from "react-icons/md";
import {GiConfirmed} from "react-icons/gi";
import ConfirmDepositModal from "../modals/ConfirmDepositModal";
import RejectDepositModal from "../modals/RejectDepositModal";

const AgentDeposits = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [selectedDeposit, setSelectedDeposit] = useState(null);
    const handleConfirmModal = () => {
        setShowConfirmModal(!showConfirmModal);
    }
    const handleRejectModal = ()=>{
        setShowRejectModal(!showRejectModal);
    }
    const deposits = [
        {
            id: 1,
            dateTime: "2023-16-05 22:12",
            amount: 251.12,
            client: 'client full name',
            ref: '254ref-895',
            paymentMethod: {
                id: 3,
                pm: 'Sberbank'
            },
            status: 'requested'
        },
        {
            id: 2,
            dateTime: "2023-16-05 22:12",
            amount: 100,
            client: 'other client full name',
            ref: '245-895',
            paymentMethod: {
                id: 2,
                pm: 'Airtel money'
            },
            status: 'requested'
        }
    ];
    const handleConfirmDeposit = id => {
        setSelectedDeposit(findDepositById(id));
        handleConfirmModal();
        console.log(id);
    }
    const findDepositById = id => deposits?.find(deposit=>deposit.id===id);
    const handleRejectDeposit = id => {
        setSelectedDeposit(findDepositById(id));
        handleRejectModal();
        console.log(id);
    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Deposits"}/>
            <table className={"table table-success table-striped table-bordered table-responsive mt-3"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"}>Date and time</th>
                    <th scope={"col"}>Amount</th>
                    <th scope={"col"}>Client</th>
                    <th scope={"col"}>Reference</th>
                    <th scope={"col"}>Payment method</th>
                    <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {deposits?.map(deposit =>
                    <tr key={deposit?.id}>
                        <td>{deposit?.dateTime}</td>
                        <td>{deposit?.amount}</td>
                        <td>{deposit?.client}</td>
                        <td>{deposit?.ref}</td>
                        <td>{deposit?.paymentMethod?.pm}</td>
                        <td className={"text-center"} onClick={() => handleConfirmDeposit(deposit?.id)}><GiConfirmed/>
                        </td>
                        <td className={"text-center"} onClick={() => handleRejectDeposit(deposit?.id)}>
                            <MdDoNotDisturbAlt/></td>
                    </tr>
                )}
                </tbody>
            </table>
            {
                selectedDeposit && showConfirmModal &&
                <ConfirmDepositModal showConfirmModal={showConfirmModal} handleConfirmModal={handleConfirmModal}
                                     depositDetails={selectedDeposit} isAgent={true}/>
            }
            {
                selectedDeposit && showRejectModal &&
                <RejectDepositModal depositDetails={selectedDeposit} showModal={showRejectModal} handleModal={handleRejectModal} />
            }
        </div>
    );
};

export default AgentDeposits;