import React, {useEffect, useState} from 'react';
import LogoutBtn from "../components/LogoutBtn";
import WalletCard from "../components/walletCard";
import ClientAddWalletModal from "../modals/ClientAddWalletModal";
import {getItem} from "../services/LocalStorageService";
import {useDispatch, useSelector} from "react-redux";
import {getWalletsByParticipant} from "../reducers/walletReducer";
import LoadingEffect from "../components/LoadingEffect";

const ClientWallets = () => {
    const [showModal, setShowModal] = useState(false);
    const wallets = useSelector(state => state?.wallets);
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        const user = getItem('connectedUser');
        setCanWait(true);
        dispatch(getWalletsByParticipant(user?.userId, callBack));
    }, [showModal, refresh]);
    const performRefresh = () => {
        setRefresh(!refresh);
    }
    const handleModal = () => {
        setShowModal(!showModal);
    }
    const handleAddPaymentMethod = () => {
        handleModal();
    }
    return (
        <div className={"row"}>
            <div className={"col-lg-5 d-flex justify-content-start ms-1"}>
                <button className={"btn btn-info"} onClick={() => handleAddPaymentMethod()}>Add wallet</button>
            </div>
            <div className={"row d-flex justify-content-center"}>
                {
                    wallets?.map(wallet => <WalletCard key={wallet?.walletId} wallet={wallet}
                                                       refresh={performRefresh}/>)
                }
            </div>
            {canWait && <div className={"text-center"}><LoadingEffect/></div>}
            {
                showModal &&
                <ClientAddWalletModal handleModal={handleModal} showModal={showModal}/>
            }
        </div>
    );
};

export default ClientWallets;