import React, {useEffect, useState} from 'react';
import {FaCity} from "react-icons/fa";
import LogoutBtn from "./LogoutBtn";
import {GrCurrency} from "react-icons/gr";
import AddPaymentMethodModal from "../modals/AddPaymentMethodModal";
import AddCurrencyModal from "../modals/AddCurrencyModal";
import {useDispatch} from "react-redux";
import {initializeCurrencies} from "../reducers/currencyReducers";

const CurrencyHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = ()=>{
        setShowModal(!showModal);
    }
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <button className={"btn btn-primary"} onClick={handleModal}>
                        <span><i><GrCurrency/></i></span> Add currency
                    </button>
                </div>
                <div className={"col-lg-3"}>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Currency"
                            aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className={"col-lg-6 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            <AddCurrencyModal handleModal={handleModal} showModal={showModal}/>
        </div>
    );
};

export default CurrencyHeader;