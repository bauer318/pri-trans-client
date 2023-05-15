import React, {useState} from 'react';
import CancelDepositModal from "../modals/CancelDepositModal";
import ConfirmDepositModal from "../modals/ConfirmDepositModal";

const PendingDeposit = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);

    const handleConfirmModal = () =>{
        setShowConfirmModal(!showConfirmModal);
    }
    const handleCancelModal = () =>{
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
            <tr>
                <td className={"text-center"}>Sberbank</td>
                <td className={"text-center"}>82.52</td>
                <td className={"text-center"}>USD Dollar</td>
                <td className={"text-center"}>9847-895</td>
                <td className={"text-center"}>Pending</td>
                <td className={"text-center"}></td>
                <td className={"text-center"} onClick={()=>handleConfirmModal()}>Confirm</td>
                <td className={"text-center"} onClick={()=>handleCancelModal()}>Cancel</td>
            </tr>
            </tbody>
        </table>
        <div className={"text-secondary"}>
            <p>Send exactly the amount from the pending deposit's request to agent's number using the mentioned payment
                method.</p>
            <p>After that, confirm the deposit putting the reference's number.</p>
            <p><i>The reference's number is the transaction's unique id.</i></p>
        </div>
        <CancelDepositModal handleCancelModal={handleCancelModal} showCancelModal={showCancelModal}/>
        <ConfirmDepositModal handleConfirmModal={handleConfirmModal} showConfirmModal={showConfirmModal}/>
    </div>);
};

export default PendingDeposit;