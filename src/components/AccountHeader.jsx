import React, {useEffect, useState} from 'react';
import {TfiWallet} from "react-icons/tfi";
import LogoutBtn from "./LogoutBtn";
import AddBalanceModal from "../modals/AddBalanceModal";
import {useDispatch} from "react-redux";
import {initializeAccounts} from "../reducers/accountReducer";
import LoadingEffect from "./LoadingEffect";

const AccountHeader = ({perform}) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        setCanWait(true);
        dispatch(initializeAccounts(callBack));
        perform();
    }, [showModal]);
    const handleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <div className={"row"}>
            <div className={"col-lg-3 d-flex justify-content-start"}>
                <button className={"btn btn-primary"} onClick={handleModal}>
                    <span><i><TfiWallet/></i></span> Add Balance
                </button>
            </div>
            {canWait && <div className={"text-center"}>
                <LoadingEffect/>
            </div>}
            {showModal &&
                <AddBalanceModal handleModal={handleModal} showModal={showModal}/>
            }
        </div>
    );
};

export default AccountHeader;