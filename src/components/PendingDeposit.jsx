import React, {useEffect, useState} from 'react';
import CancelDepositModal from "../modals/CancelDepositModal";
import ConfirmDepositModal from "../modals/ConfirmDepositModal";
import {getItem} from "../services/LocalStorageService";
import {useDispatch, useSelector} from "react-redux";
import {getOrdersToFromParticipant} from "../reducers/orderReducer";
import PendingDepositCard from "./pendingDepositCard";

const PendingDeposit = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [selectedPendingDeposit, setSelectedPendingDeposit] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const connectedUser = getItem('connectedUser');
        dispatch(getOrdersToFromParticipant(connectedUser?.userId, "requested", "deposit"));
    }, [showCancelModal, showConfirmModal]);

    const pendingDeposits = useSelector(state => state.orders);
    const handleConfirmDeposit = depositPending => {
        setSelectedPendingDeposit(depositPending);
        handleConfirmModal();
    }
    const handleCancelDeposit = depositPending => {
        setSelectedPendingDeposit(depositPending);
        handleCancelModal();
    }
    const handleConfirmModal = () => {
        setShowConfirmModal(!showConfirmModal);
    }
    const handleCancelModal = () => {
        setShowCancelModal(!showCancelModal);
    }
    return (<div>
        <div className={"d-flex justify-content-center"}>
            <p className={"text-secondary"}>Pending deposit</p>
        </div>
        {pendingDeposits?.length > 0 && <div className={"d-flex justify-content-center"}>
            <div className={"text-secondary"}>
                <p>Send exactly the amount from the pending deposit's request to agent's number using the mentioned
                    payment
                    method.</p>
                <p>After that, confirm the deposit putting the reference's number.</p>
                <p><i>The reference's number is the transaction's unique id.</i></p>
            </div>
        </div>

        }
        <div className={"row container mx-auto d-flex justify-content-center mt-2"}>
            {
                pendingDeposits?.map((pendingDeposit, key) =>
                    <PendingDepositCard key={key} pendingDeposit={pendingDeposit}
                                        handleConfirmDeposit={handleConfirmDeposit}
                                        handleCancelDeposit={handleCancelDeposit}/>
                )
            }
        </div>
        {
            showCancelModal &&
            <CancelDepositModal handleCancelModal={handleCancelModal} showCancelModal={showCancelModal}
                                depositDetails={selectedPendingDeposit}/>
        }
        {
            showConfirmModal &&
            <ConfirmDepositModal handleConfirmModal={handleConfirmModal} showConfirmModal={showConfirmModal}
                                 depositDetails={selectedPendingDeposit}/>
        }

    </div>);
};

export default PendingDeposit;