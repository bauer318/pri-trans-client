import React, {useEffect, useState} from 'react';
import HomeHeader from "../components/HomeHeader";
import ManualTransferList from "../components/ManualTransferList";
import {useNavigate} from "react-router-dom";
import {getItem} from "../services/LocalStorageService";
import {printError} from "../services/Utils";
import participantService from "../services/ParticipantService";
import ToAddPersonalInfoModal from "../modals/ToAddPersonalInfoModal";

const ClientManualTransfer = () => {
    const [selectedCountryId, setSelectedCountryId] = useState();
    const [canWait, setCanWait] = useState(false);
    const navigate = useNavigate();
    const connectedUser = getItem('connectedUser');
    const [isVerified, setIsVerified] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleModal = ()=>{
        setShowModal(!showModal);
    }

    const callBack = () => {
        setCanWait(false);
    }

    const handleMyPrivateTransferOnClick = () => {
        if(isVerified){
            navigate('/client/manual-transfer/private')
        }else{
            handleModal();
        }

    }
    useEffect(()=>{
        setCanWait(true);
        participantService.isVerifiedUser(getItem("connectedUser")?.userId, callBack)
            .then(response => {
                setIsVerified(response);
                callBack();
            }).catch(error=>{
                callBack();
            printError(error);
        })
    },[])
    return (
        <div className={"container"}>
            <h4 className={"text-center"}>Les transferts manuels, la sécurité à l'expéditeur.</h4>
            <hr/>
            <hr/>
            <HomeHeader setSelectedCountry={setSelectedCountryId}/>
            {connectedUser && <div className={"d-flex justify-content-end"}>
                <button className={"btn btn-primary mt-2"} disabled={canWait} onClick={handleMyPrivateTransferOnClick}>Mes transferts
                </button>
            </div>}
            {selectedCountryId && <ManualTransferList selectedCountryId={selectedCountryId} isVerified={isVerified}/>}
            {!selectedCountryId && <h4 className={"text-center mt-2"}>En attente d'une destination...</h4>}
            {showModal && <ToAddPersonalInfoModal handleModal={handleModal} showModal={showModal}/>}
        </div>
    );
};

export default ClientManualTransfer;