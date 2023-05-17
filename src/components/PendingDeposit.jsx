import React, {useState} from 'react';
import CancelDepositModal from "../modals/CancelDepositModal";
import ConfirmDepositModal from "../modals/ConfirmDepositModal";

const PendingDeposit = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [selectedPendingDeposit, setSelectedPendingDeposit] = useState(null);
    const pendingDeposits = [
        {
            id: 1,
            amount: 251.21,
            paymentMethod: {
                id: 1,
                pm: 'Sberbank'
            },
            currency: {
                id: 1,
                currency: 'usd'
            },
            agentNumber: 'ag214-856',
            status: 'pending',
            note: ''
        }
    ];
    const handleConfirmDeposit = id => {
        setSelectedPendingDeposit(findDepositById(id));
        handleConfirmModal();
    }
    const handleCancelDeposit = id => {
        setSelectedPendingDeposit(findDepositById(id));
        handleCancelModal();
    }
    const findDepositById = id => {
        return pendingDeposits?.find(p => p.id === id);
    }
    const handleConfirmModal = () => {
        setShowConfirmModal(!showConfirmModal);
    }
    const handleCancelModal = () => {
        setShowCancelModal(!showCancelModal);
    }
    return (<div>
        <div className={"d-flex justify-content-center"}>
            <p className={"text-secondary"}>Pending deposit</p>
        </div>
        <table className={"table table-success table-striped table-bordered table-responsive"}>
            <thead className={"table-light"}>
            <tr>
                <th scope={"col"} className={"text-center"}>Payment method</th>
                <th scope={"col"} className={"text-center"}>Amount</th>
                <th scope={"col"} className={"text-center"}>Currency</th>
                <th scope={"col"} className={"text-center"}>Agent's number</th>
                <th scope={"col"} className={"text-center"}>Status</th>
                <th scope={"col"} className={"text-center"}>Note</th>
                <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                pendingDeposits?.map(pendingDeposit =>
                    <tr key={pendingDeposit?.id}>
                        <td className={"text-center"}>{pendingDeposit?.paymentMethod.pm}</td>
                        <td className={"text-center"}>{pendingDeposit?.amount}</td>
                        <td className={"text-center"}>{pendingDeposit?.currency.currency}</td>
                        <td className={"text-center"}>{pendingDeposit?.agentNumber}</td>
                        <td className={"text-center"}>{pendingDeposit?.status}</td>
                        <td className={"text-center"}></td>
                        <td className={"text-center"} onClick={() => handleConfirmDeposit(pendingDeposit?.id)}>Confirm
                        </td>
                        <td className={"text-center"} onClick={() => handleCancelDeposit(pendingDeposit?.id)}>Cancel
                        </td>
                    </tr>)
            }
            </tbody>
        </table>
        <div className={"text-secondary"}>
            <p>Send exactly the amount from the pending deposit's request to agent's number using the mentioned payment
                method.</p>
            <p>After that, confirm the deposit putting the reference's number.</p>
            <p><i>The reference's number is the transaction's unique id.</i></p>
        </div>
        {
            showCancelModal &&
            <CancelDepositModal handleCancelModal={handleCancelModal} showCancelModal={showCancelModal}
                                depositDetails={selectedPendingDeposit}/>
        }
        {
            showConfirmModal &&
            <ConfirmDepositModal handleConfirmModal={handleConfirmModal} showConfirmModal={showConfirmModal}
                                 depositDetails={selectedPendingDeposit}/>
        }

    </div>);
};

export default PendingDeposit;