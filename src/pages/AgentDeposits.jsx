import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {MdDoNotDisturbAlt} from "react-icons/md";
import {GiConfirmed} from "react-icons/gi";
import ConfirmDepositModal from "../modals/ConfirmDepositModal";
import RejectDepositModal from "../modals/RejectDepositModal";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../services/LocalStorageService";
import {getOrdersToFromParticipant} from "../reducers/orderReducer";

const AgentDeposits = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [selectedDeposit, setSelectedDeposit] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        dispatch(getOrdersToFromParticipant(connectedUser?.userId, "processing", "deposit"))
    }, []);

    const pendingDeposits = useSelector(state => state.orders);
    const handleConfirmModal = () => {
        setShowConfirmModal(!showConfirmModal);
    }
    const handleRejectModal = () => {
        setShowRejectModal(!showRejectModal);
    }
    const handleConfirmDeposit = selectedPendingDeposit => {
        setSelectedDeposit(selectedPendingDeposit);
        handleConfirmModal();
    }
    const handleRejectDeposit = selectedPendingDeposit => {
        setSelectedDeposit(selectedPendingDeposit);
        handleRejectModal();
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
                {
                    pendingDeposits?.map((pendingDeposit, key) =>
                        <tr key={key}>
                            <td>{pendingDeposit?.createdAt}</td>
                            <td>{pendingDeposit?.amount} {pendingDeposit?.currency}</td>
                            <td>{pendingDeposit?.clientFullName}</td>
                            <td>{pendingDeposit?.reference}</td>
                            <td>{pendingDeposit?.paymentMethod}</td>
                            <td className={"text-center"} onClick={() => handleConfirmDeposit(pendingDeposit)}>
                                <GiConfirmed/>
                            </td>
                            <td className={"text-center"} onClick={() => handleRejectDeposit(pendingDeposit)}>
                                <MdDoNotDisturbAlt/></td>
                        </tr>)}
                </tbody>
            </table>
            {
                selectedDeposit && showConfirmModal &&
                <ConfirmDepositModal showConfirmModal={showConfirmModal} handleConfirmModal={handleConfirmModal}
                                     depositDetails={selectedDeposit} isAgent={true}/>
            }
            {
                selectedDeposit && showRejectModal &&
                <RejectDepositModal depositDetails={selectedDeposit} showModal={showRejectModal}
                                    handleModal={handleRejectModal}/>
            }
        </div>
    )
        ;
};

export default AgentDeposits;