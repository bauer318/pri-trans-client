import React, {useEffect, useState} from 'react';
import {TfiWallet} from "react-icons/tfi";
import LogoutBtn from "./LogoutBtn";
import AddBalanceModal from "../modals/AddBalanceModal";
import {useDispatch} from "react-redux";
import {initializeAccounts} from "../reducers/accountReducer";
import LoadingEffect from "./LoadingEffect";
import participantService from "../services/ParticipantService";
import {getItem} from "../services/LocalStorageService";

const AccountHeader = ({perform}) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        setCanWait(true);
        dispatch(initializeAccounts(callBack));
        participantService.isVerifiedUser(getItem("connectedUser")?.userId, callBack)
            .then(response => {
                setIsVerified(response);
            })
        perform();
    }, [showModal]);
    const handleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <div className={"row"}>
            <div className={"col-lg-3 d-flex justify-content-start"}>
                <button className={"btn btn-primary"} onClick={handleModal} disabled={!isVerified}>
                    <span><i><TfiWallet/></i></span> Add Balance
                </button>
            </div>
            <div>
                {!isVerified && <h4 className={"text-danger text-center ms-2"}>Add personal infos</h4>}
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