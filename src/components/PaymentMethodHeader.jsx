import React, {useEffect, useState} from 'react';
import LogoutBtn from "./LogoutBtn";
import {FaExchangeAlt} from "react-icons/fa";
import AddPaymentMethodModal from "../modals/AddPaymentMethodModal";
import {useDispatch} from "react-redux";
import {findPaymentMethodByName, initializePaymentMethods} from "../reducers/paymentMethodReducers";

const PaymentMethodHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("");
    const dispatch = useDispatch();
    const [notFound, setNotFound] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const paymentMethodWasNotFound = () => {
        setNotFound(true);
    }

    useEffect(() => {
        if (notFound) {
            setErrorMessage("Payment method " + paymentMethod + " was not found");
            dispatch(initializePaymentMethods());
        } else {
            setErrorMessage("");
        }
    }, [notFound]);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(findPaymentMethodByName(paymentMethod, paymentMethodWasNotFound));
    }
    const handleModal = () => {
        setShowModal(!showModal);
    }

    const handleChange = event => {
        setPaymentMethod(event.target.value);
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
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Method"
                            onChange={handleChange}
                            required={true}
                            aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className={"col-lg-3"}>
                    {notFound && <span className={"text-center text-danger"}>{errorMessage}</span>}
                </div>
                <div className={"col-lg-3 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            {showModal &&
                <AddPaymentMethodModal handleModal={handleModal} showModal={showModal}/>}
        </div>
    );
};

export default PaymentMethodHeader;