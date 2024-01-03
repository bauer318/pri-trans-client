import React, {useEffect, useState} from 'react';
import CSWHeader from "../components/CSWHeader";
import {GiConfirmed} from "react-icons/gi";
import {MdDoNotDisturbAlt} from "react-icons/md";
import ConfirmWithdrawModal from "../modals/ConfirmWithdrawModal";
import RejectWithdrawalsModal from "../modals/RejectWithdrawalsModal";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../services/LocalStorageService";
import {getWithdrawOrdersToAgent} from "../reducers/orderReducer";

const AgentWithdrawals = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const dispatch = useDispatch();
    const [withdrawDetails, setWithdrawDetails] = useState({});

    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        dispatch(getWithdrawOrdersToAgent(connectedUser?.userId));
    }, [showConfirmModal, showRejectModal]);

    const pendingWithdrawals = useSelector(state => state.orders);

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
    const findWithdrawalById = id => withdrawals?.find(withdrawal => withdrawal.id === id);
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
            <table className={"table table-success table-striped table-bordered table-responsive mt-3"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"}>Date and time</th>
                    <th scope={"col"}>Amount</th>
                    <th scope={"col"}>Client wallet's number</th>
                    <th scope={"col"}>Client wallet's name</th>
                    <th scope={"col"}>Payment method</th>
                    <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {pendingWithdrawals?.map((withdrawal, key) =>
                    <tr key={key}>
                        <td>{withdrawal?.createdAt}</td>
                        <td>{withdrawal?.amount} {withdrawal?.currency}</td>
                        <td>{withdrawal?.clientWalletNumber}</td>
                        <td>{withdrawal?.ownerName}</td>
                        <td>{withdrawal?.paymentMethod}</td>
                        <td className={"text-center"} onClick={() => handleConfirmWithdraw(withdrawal)}>
                            <GiConfirmed/>
                        </td>
                        <td className={"text-center"} onClick={() => handleRejectWithdraw(withdrawal)}>
                            <MdDoNotDisturbAlt/></td>
                    </tr>
                )}
                </tbody>
            </table>
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