import React, {useState} from 'react';
import {TfiWallet} from "react-icons/tfi";
import LogoutBtn from "./LogoutBtn";
import AddBalanceModal from "../modals/AddBalanceModal";

const AccountHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <div className={"row"}>
            <div className={"col-lg-6 d-flex justify-content-start"}>
                <button className={"btn btn-primary"} onClick={handleModal}>
                    <span><i><TfiWallet/></i></span> Add Balance
                </button>
            </div>
            <div className={"col-lg-6 d-flex justify-content-end"}>
                <LogoutBtn/>
            </div>
            {showModal &&
                <AddBalanceModal handleModal={handleModal} showModal={showModal}/>
            }
        </div>
    );
};

export default AccountHeader;