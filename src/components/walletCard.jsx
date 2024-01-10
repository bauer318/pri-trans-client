import React, {useEffect, useState} from 'react';
import {FaEdit} from "react-icons/fa";
import {AiOutlineDelete} from "react-icons/ai";
import ClientEditWallet from "../modals/ClientEditWalletModal";
import ClientDeleteWalletModal from "../modals/ClentDeleteWalletModal";


const WalletCard = ({wallet, refresh}) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleEditModal = () => {
        setShowEditModal(!showEditModal);
    }
    useEffect(() => {
        refresh();
    }, [showEditModal]);
    const handleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal);
    }
    return (
        <div className={"col"}>
            <div className={"card mb-3 card-pm"}>
                <div className={"card-header text-center"}><span className={"fw-bolder"}>{wallet?.currency?.currency}</span> wallet</div>
                <div className={"card-body text-center"}>
                    <h5 className={"card-title"}>{wallet?.paymentMethod?.paymentMethod},  {wallet?.currency?.symbol}</h5>
                    <p className={"card-text text-body"}>{wallet?.walletNumber}</p>
                    <p className={"card-text text-body"}>{wallet?.ownerName}</p>
                </div>
                <div className={"card-footer d-flex justify-content-around"}>
                    <button className={"btn btn-info"} onClick={handleEditModal}><span><i><FaEdit size={28}/></i></span>
                    </button>
                    <button className={"btn btn-danger disabled"} onClick={handleDeleteModal}><span><i><AiOutlineDelete
                        size={28}/></i></span></button>
                </div>
            </div>
            {showEditModal &&
                <ClientEditWallet wallet={wallet} handleModal={handleEditModal}
                                              showModal={showEditModal}/>
            }
            {
                showDeleteModal &&
                <ClientDeleteWalletModal wallet={wallet} handleModal={handleDeleteModal}
                                        showModal={showDeleteModal}/>
            }
        </div>
    );
};

export default WalletCard;