import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {GiConfirmed} from "react-icons/gi";
import {MdDoNotDisturbAlt} from "react-icons/md";
import ConfirmWithdrawModal from "../modals/ConfirmWithdrawModal";
import RejectWithdrawalsModal from "../modals/RejectWithdrawalsModal";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../services/LocalStorageService";
import {getWithdrawOrdersToAgent} from "../reducers/orderReducer";
import AgentPendingDepositCard from "../components/agentPendingDepositCard";
import AgentPendingWithdrawCard from "../components/AgentPendingWithdrawCard";

const AgentWithdrawals = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const dispatch = useDispatch();
    const [withdrawDetails, setWithdrawDetails] = useState({});

    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        dispatch(getWithdrawOrdersToAgent(connectedUser?.userId));
    }, [showConfirmModal,showRejectModal]);

    const pendingWithdrawals = useSelector(state => state.orders);

    const handleConfirmModal = () => {
        setShowConfirmModal(!showConfirmModal);
    }
    const handleRejectModal = () => {
        setShowRejectModal(!showRejectModal);
    }
    const handleConfirmWithdraw = selectedPendingWithdraw => {
        setWithdrawDetailsFunc(selectedPendingWithdraw);
        handleConfirmModal();
    }
    const handleRejectWithdraw = selectedPendingWithdraw => {
        setWithdrawDetailsFunc(selectedPendingWithdraw);
        handleRejectModal();
    }

    const setWithdrawDetailsFunc = selectedWithdraw => {
        setWithdrawDetails({
            amount: selectedWithdraw?.amount,
            paymentMethod: selectedWithdraw?.paymentMethod,
            currency: selectedWithdraw?.currency,
            clientWalletNumber: selectedWithdraw?.clientWalletNumber,
            ownerName: selectedWithdraw?.ownerName,
            orderId: selectedWithdraw?.orderId
        })

    }
    return (
        <div className={"container"}>
            <CSWHeader title={"Withdrawals"}/>
            <div className={"row container mx-auto d-flex justify-content-center mt-2"}>
                {
                    pendingWithdrawals?.map((withdrawal, key) =>
                        <AgentPendingWithdrawCard key={key} pendingWithdrawals={withdrawal}
                                                  handleConfirmWithdraw={handleConfirmWithdraw}
                                                  handleRejectWithdraw={handleRejectWithdraw}/>
                    )
                }
            </div>
            {
                withdrawDetails && showConfirmModal &&
                <ConfirmWithdrawModal handleModal={handleConfirmModal} showModal={showConfirmModal} isAgent={true}
                                      withdrawDetails={withdrawDetails}/>
            }
            {
                withdrawDetails && showRejectModal &&
                <RejectWithdrawalsModal withdrawDetails={withdrawDetails} showModal={showRejectModal}
                                        handleModal={handleRejectModal}/>
            }
        </div>
    );
};

export default AgentWithdrawals;