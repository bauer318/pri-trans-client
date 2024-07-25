import React, {useEffect, useState} from 'react';
import LogoutBtn from "./LogoutBtn";
import {GrCurrency} from "react-icons/gr";
import AddCurrencyModal from "../modals/AddCurrencyModal";
import {useDispatch} from "react-redux";
import {findCurrencyByName, initializeCurrencies} from "../reducers/currencyReducers";
import LoadingEffect from "./LoadingEffect";

const CurrencyHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [currency, setCurrency] = useState("");
    const dispatch = useDispatch();
    const [notFound, setNotFound] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    const currencyWasNotFound = () => {
        setNotFound(true);
    }

    useEffect(() => {
        if (notFound) {
            setCanWait(true);
            setErrorMessage("Currency with name " + currency + " was not found");
            dispatch(initializeCurrencies(callBack));
        } else {
            setErrorMessage("");
        }
    }, [notFound]);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(findCurrencyByName(currency, currencyWasNotFound));
    }
    const handleModal = () => {
        setShowModal(!showModal);
    }
    const handleChange = event => {
        setCurrency(event.target.value);
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
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            onChange={handleChange}
                            placeholder="Currency"
                            required={true}
                            aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className={"col-lg-3"}>
                    {notFound && <span className={"text-center text-danger"}>{errorMessage}</span>}
                </div>
            </div>
            {canWait && <div className={"text-center"}><LoadingEffect/></div>}
            {
                showModal &&
                <AddCurrencyModal handleModal={handleModal} showModal={showModal}/>
            }
        </div>
    );
};

export default CurrencyHeader;