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
    const [canWait, setCanWait] = useState(false);
    const [canRefresh, setCanRefresh] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        const connectedUser = getItem('connectedUser');
        setCanWait(true);
        dispatch(getOrdersToFromParticipant(connectedUser?.userId, "requested", "deposit", callBack));
    }, [canRefresh]);

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
        if(showConfirmModal){
            setCanRefresh(!canRefresh);
        }
        setShowConfirmModal(!showConfirmModal);
    }
    const handleCancelModal = () => {
        if(showCancelModal){
            setCanRefresh(!canRefresh);
        }
        setShowCancelModal(!showCancelModal);
    }
    return (<div>
        <div className={"d-flex justify-content-center"}>
            <h3 className={"text-secondary"}>Dépôt en attente</h3>
        </div>
        {pendingDeposits?.length > 0 && <div className={"d-flex justify-content-center"}>
            <div className={"text-secondary"}>
                <p>Envoyez exactement le montant de la demande de dépôt en attente au numéro de l'agent en utilisant
                    la methode de paiement mentionnée.</p>
                <p>Après cela, confirmez le dépôt en envoyant le numéro de référence ou le nom de votre compte bancaire</p>
                <p><i>Le numéro de référence commence par <span className={"text-decoration-underline"}>Ref:</span>, cas de M-pesa</i></p>
            </div>
        </div>

        }
        <div className={"row container mx-auto d-flex justify-content-center mt-2"}>
            {canWait ? <p className={"text-center"}>Loading</p> :
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