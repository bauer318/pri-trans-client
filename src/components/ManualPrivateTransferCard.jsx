import React, {useState} from 'react';
import {getStatusFr, getStatusToPrint, printError, timeAgo} from "../services/Utils";
import manualTransferService from "../services/ManualTransferService";
import UpdateManualTransferModal from "../modals/UpdateManualTransferModal";
import {refreshTransferList} from "../pages/ClientPrivateManualTransfer";

const ManualPrivateTransferCard = ({transfer}) => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    }

    const handleStatusChange = (e) => {
        const selectedStatus = e.target.value;
        if (selectedStatus !== transfer?.status) {
            switch (selectedStatus) {
                case 'partially':
                    handleModal();
                    break;
                case 'canceled':
                    closeTransfer(false);
                    break;
                case 'closed':
                    closeTransfer(true);
                    break;
            }
        }
    }

    const closeTransfer = (isSimpleOrderProcessed) => {
        const request = {
            id: transfer?.id,
            isSimpleOrderProcessed: isSimpleOrderProcessed
        }
        manualTransferService.close(request).then(
            () => {
                refreshTransferList();
            }
        ).catch(error => {
            printError(error);
        })
    }

    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{transfer?.amount}{transfer?.currency}, {transfer?.destination}
                    </h5>
                    <hr/>
                    <div className={'row'}>
                        <div className={'col'}>
                            <p className={'mt-2'}>Status:</p>
                        </div>
                        {transfer?.status === 'pending' ? <div className={'col'}>
                            <select className={"form-select"} aria-label={"Default select example"}
                                    onChange={handleStatusChange} value={getStatusFr(transfer?.status)}>
                                <option value={""}>{getStatusFr(transfer?.status)}</option>
                                {getStatusToPrint()?.map((transferStatus, key) => <option
                                    value={transferStatus?.name}
                                    key={key}>{transferStatus?.value}</option>)}
                            </select>
                        </div> : <div className={'col'}>
                            <p className={'mt-2'}>{getStatusFr(transfer?.status)}</p>
                        </div>}

                    </div>

                </div>
                <div className="card-footer">
                    <small className="text-muted">{timeAgo(transfer?.createdAt)}</small>
                </div>
                {showModal && <UpdateManualTransferModal showModal={showModal} handleModal={handleModal}
                                                         transferId={transfer?.id}/>}
            </div>
        </div>
    );
};

export default ManualPrivateTransferCard;