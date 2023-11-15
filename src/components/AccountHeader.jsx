import React, {useEffect, useState} from 'react';
import {TfiWallet} from "react-icons/tfi";
import LogoutBtn from "./LogoutBtn";
import AddBalanceModal from "../modals/AddBalanceModal";
import {useDispatch} from "react-redux";
import {initializeAccounts} from "../reducers/accountReducer";

const AccountHeader = ({perform}) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeAccounts());
        perform();
    }, [showModal]);
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