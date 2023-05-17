import React, {useState} from 'react';
import {FaEdit} from "react-icons/fa";
import {AiOutlineDelete} from "react-icons/ai";
import ClientEditPaymentMethodModal from "../modals/ClientEditPaymentMethodModal";
import ClientDeletePaymentMethodModal from "../modals/ClientDeletePaymentMethodModal";


const PaymentMethodCard = ({paymentMethodDetails}) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleEditModal = () => {
        setShowEditModal(!showEditModal);
    }
    const handleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal);
    }
    return (
        <div className={"col"}>
            <div className={"card mb-3 card-pm"}>
                <div className={"card-header text-center"}>Payment method</div>
                <div className={"card-body text-center"}>
                    <h5 className={"card-title"}>{paymentMethodDetails?.paymentMethod.pm}</h5>
                    <p className={"card-text text-body"}>{paymentMethodDetails?.number}</p>
                    <p className={"card-text text-body"}>{paymentMethodDetails?.accountName}</p>
                </div>
                <div className={"card-footer d-flex justify-content-around"}>
                    <button className={"btn btn-info"} onClick={handleEditModal}><span><i><FaEdit size={28}/></i></span>
                    </button>
                    <button className={"btn btn-danger"} onClick={handleDeleteModal}><span><i><AiOutlineDelete
                        size={28}/></i></span></button>
                </div>
            </div>
            {showEditModal &&
                <ClientEditPaymentMethodModal paymentMethod={paymentMethodDetails} handleModal={handleEditModal}
                                              showModal={showEditModal}/>
            }
            {
                showDeleteModal &&
                <ClientDeletePaymentMethodModal paymentMethod={paymentMethodDetails} handleModal={handleDeleteModal}
                                              showModal={showDeleteModal}/>
            }
        </div>
    );
};

export default PaymentMethodCard;