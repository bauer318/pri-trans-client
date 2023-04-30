import React, {useState} from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import UpdateCurrency from "../modals/UpdateCurrency";
import UpdatePaymentMethod from "../modals/UpdatePaymentMethod";

const PaymentMethodTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [paymentMethodId, setPaymentMethodId] = useState(0);
    const [isDelete, setIsDelete] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
    };
    const handleHelp = (paymentMethodIdParam) => {
        setPaymentMethodId(paymentMethodIdParam);
        handleModal();
    };

    const handleEdit = (paymentMethodIdParam) => {
        handleHelp(paymentMethodIdParam);
        setIsDelete(false);
    };

    const handleDelete = (paymentMethodIdParam) => {
        handleHelp(paymentMethodIdParam);
        setIsDelete(true);
    };
    return (
        <div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Payment method</th>
                    <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={"text-center"}>Sberbank</td>
                    <td className={"text-center"} onClick={() => handleEdit(1)}><FaEdit/></td>
                    <td className={"text-center"} onClick={() => handleDelete(2)}><MdDeleteForever/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>Airtel money </td>
                    <td className={"text-center"} onClick={() => handleEdit(2)}><FaEdit/></td>
                    <td className={"text-center"} onClick={() => handleDelete(2)}><MdDeleteForever/></td>
                </tr>
                </tbody>
            </table>
            <UpdatePaymentMethod paymentMethodId={paymentMethodId} showModal={showModal} handleModal={handleModal} isDelete={isDelete}/>
        </div>
    );
};

export default PaymentMethodTable;