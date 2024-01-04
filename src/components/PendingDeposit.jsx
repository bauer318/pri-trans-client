import React, {useEffect, useState} from 'react';
import CancelDepositModal from "../modals/CancelDepositModal";
import ConfirmDepositModal from "../modals/ConfirmDepositModal";
import {useLocation} from "react-router-dom";
import {getItem, saveItem} from "../services/LocalStorageService";
import {useDispatch, useSelector} from "react-redux";
import {getOrdersToFromParticipant, getOrdersToParticipant} from "../reducers/orderReducer";

const PendingDeposit = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [selectedPendingDeposit, setSelectedPendingDeposit] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const connectedUser = getItem('connectedUser');
        const pendingOrderRequest = {
            fromToParticipantId: connectedUser?.userId,
            orderStatus: 'requested',
            transactionType: 'deposit'
        };
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
        <table className={"table table-success table-striped table-bordered table-responsive"}>
            <thead className={"table-light"}>
            <tr>
                <th scope={"col"} className={"text-center"}>Payment method</th>
                <th scope={"col"} className={"text-center"}>Amount</th>
                <th scope={"col"} className={"text-center"}>Currency</th>
                <th scope={"col"} className={"text-center"}>Agent's number</th>
                <th scope={"col"} className={"text-center"}>Status</th>
                <th scope={"col"} className={"text-center"}>Note</th>
                <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                pendingDeposits?.map((pendingDeposit, key) =>
                    <tr key={key}>
                        <td className={"text-center"}>{pendingDeposit?.paymentMethod}</td>
                        <td className={"text-center"}>{pendingDeposit?.amount}</td>
                        <td className={"text-center"}>{pendingDeposit?.currency}</td>
                        <td className={"text-center"}>{pendingDeposit?.agentWalletNumber}</td>
                        <td className={"text-center"}>{pendingDeposit?.status}</td>
                        <td className={"text-center"}></td>
                        <td className={"text-center"} onClick={() => handleConfirmDeposit(pendingDeposit)}>Confirm
                        </td>
                        <td className={"text-center"} onClick={() => handleCancelDeposit(pendingDeposit)}>Cancel
                        </td>
                    </tr>)
            }
            </tbody>
        </table>
        {pendingDeposits?.length > 0 &&
            <div className={"text-secondary"}>
                <p>Send exactly the amount from the pending deposit's request to agent's number using the mentioned
                    payment
                    method.</p>
                <p>After that, confirm the deposit putting the reference's number.</p>
                <p><i>The reference's number is the transaction's unique id.</i></p>
            </div>
        }

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