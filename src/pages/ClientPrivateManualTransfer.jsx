import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import AddManualTransferModal from "../modals/AddManualTransferModal";
import ManualTransferList from "../components/ManualTransferList";
import {transferStatus} from "../services/Utils";
export var refreshTransferList = () => {
};
const ClientPrivateManualTransfer = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState('');
    const [isStatusSelected, setIsStatusSelected] = useState(false);
    const [canRefresh, setCanRefresh] = useState(false);
    refreshTransferList = () => {
        setCanRefresh(!canRefresh);
    }
    useEffect(() => {
        setStatus('pending');
        setIsStatusSelected(true);
    }, [canRefresh]);
    const handleBackOnClick = () => {
        navigate('/client/manual-transfer');
    }
    const handleShowModal = () => {
        if (showModal) {
            setCanRefresh(!canRefresh);
        }
        setShowModal(!showModal);
    }
    const handleStatusChange = (e) => {
        const selectedStatus = e.target.value;
        if (selectedStatus !== '') {
            setStatus(selectedStatus);
            setIsStatusSelected(true);
        }
    }

    return (
        <div>
            <h4 className={"text-center"}>Mes transferts</h4>
            <div className={"d-flex justify-content-between"}>
                <div>
                    <button className={"btn btn-secondary"} onClick={handleBackOnClick}>Retour</button>
                </div>
                <div>
                    <button className={"btn btn-primary"} onClick={handleShowModal}>Ajouter</button>
                </div>
            </div>
            <hr/>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-start"}>
                    <p>Filtrer par: </p>
                </div>
                <div className={"col-lg-3 d-flex justify-content-start"}>
                    <select className={"form-select"} aria-label={"Default select example"}
                            onChange={handleStatusChange} value={status}>
                        <option value={""}>Sélectionner...</option>
                        {transferStatus?.map((transferStatus, key) => <option value={transferStatus?.name}
                                                                              key={key}>{transferStatus?.value}</option>)}
                    </select>
                </div>
            </div>
            {isStatusSelected && <ManualTransferList isPrivate={true} status={status} canRefresh={canRefresh}/>}
            {showModal && <AddManualTransferModal showModal={showModal} handleModal={handleShowModal}/>}
        </div>
    );
};

export default ClientPrivateManualTransfer;