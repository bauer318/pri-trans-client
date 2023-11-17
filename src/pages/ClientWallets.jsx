import React, {useEffect, useState} from 'react';
import LogoutBtn from "../components/LogoutBtn";
import WalletCard from "../components/walletCard";
import ClientAddWalletModal from "../modals/ClientAddWalletModal";
import {getItem} from "../services/LocalStorageService";
import {useDispatch, useSelector} from "react-redux";
import {getWalletsByParticipant} from "../reducers/walletReducer";

const ClientWallets = () => {
    const [showModal, setShowModal] = useState(false);
    const wallets = useSelector(state => state?.wallets);
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const user = getItem('connectedUser');
        dispatch(getWalletsByParticipant(user?.userId));
    }, [showModal,refresh]);
    const performRefresh = ()=>{
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
            <div className={"col-lg-6 d-flex justify-content-end"}>
                <LogoutBtn/>
            </div>
            <div className={"row row-cols-1 row-cols-md-3 g-4 mt-2 ms-2"}>
                {
                    wallets?.map(wallet => <WalletCard key={wallet?.walletId} wallet={wallet} refresh={performRefresh}/>)
                }
            </div>
            {
                showModal &&
                <ClientAddWalletModal handleModal={handleModal} showModal={showModal}/>
            }
        </div>
    );
};

export default ClientWallets;