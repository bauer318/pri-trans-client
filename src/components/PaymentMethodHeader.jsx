import React, {useState} from 'react';
import LogoutBtn from "./LogoutBtn";
import {FaExchangeAlt} from "react-icons/fa";
import AddPaymentMethodModal from "../modals/AddPaymentMethodModal";

const PaymentMethodHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = ()=>{
        setShowModal(!showModal);
    }
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <button className={"btn btn-primary"} onClick={handleModal}>
                        <span><i><FaExchangeAlt/></i></span> Add payment method
                    </button>
                </div>
                <div className={"col-lg-3"}>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Method"
                            aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            <AddPaymentMethodModal handleModal={handleModal} showModal={showModal}/>
        </div>
    );
};

export default PaymentMethodHeader;