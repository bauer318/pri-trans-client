import React, {useState} from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import UpdatePaymentMethodModal from "../modals/UpdatePaymentMethodModal";
import {useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";

const PaymentMethodTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();
    const [isDelete, setIsDelete] = useState(false);
    const pm = useSelector(state => state.paymentMethods);
    const handleModal = () => {
        setShowModal(!showModal);
    };
    const handleHelp = (paymentMethodIdParam) => {
        const selectedPm = pm.find(pmEl => pmEl?.id === paymentMethodIdParam);
        setSelectedPaymentMethod(selectedPm);
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
        <>{pm && pm?.length > 0 ?
            (<div>
                <table className={"table table-success table-striped table-bordered table-responsive"}>
                    <thead className={"table-light"}>
                    <tr>
                        <th scope={"col"} className={"text-center"}>Payment method</th>
                        <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        pm?.map(pmEl =>
                            <tr key={pmEl?.id}>
                                <td className={"text-center"}>{pmEl?.method}</td>
                                <td className={"text-center"} onClick={() => handleEdit(pmEl?.id)}>
                                    <FaEdit/></td>
                                <td className={"text-center"} onClick={() => handleDelete(pmEl?.id)}>
                                    <MdDeleteForever/>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                {
                    selectedPaymentMethod &&
                    <UpdatePaymentMethodModal selectedPaymentMethod={selectedPaymentMethod} showModal={showModal}
                                              handleModal={handleModal} isDelete={isDelete}/>
                }
            </div>) : (<LoadingEffect/>)}
        </>
    );
};

export default PaymentMethodTable;