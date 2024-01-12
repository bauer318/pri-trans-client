import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import ConfirmDepositModal from "../modals/ConfirmDepositModal";
import RejectDepositModal from "../modals/RejectDepositModal";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../services/LocalStorageService";
import {getOrdersToFromParticipant} from "../reducers/orderReducer";
import AgentPendingDepositCard from "../components/agentPendingDepositCard";

const AgentDeposits = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [selectedDeposit, setSelectedDeposit] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        dispatch(getOrdersToFromParticipant(connectedUser?.userId, "processing", "deposit"))
    }, [showConfirmModal, showRejectModal]);

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
            <div className={"row container mx-auto d-flex justify-content-center mt-2"}>
                {
                    pendingDeposits?.map((pendingDeposit, key) =>
                        <AgentPendingDepositCard key={key} pendingDeposit={pendingDeposit}
                                                 handleConfirmDeposit={handleConfirmDeposit}
                                                 handleCancelDeposit={handleRejectDeposit}/>
                    )
                }
            </div>
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