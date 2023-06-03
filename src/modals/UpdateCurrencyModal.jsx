import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {GrCurrency} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {deleteCurrency, updateCurrency} from "../reducers/currencyReducers";

const UpdateCurrencyModal = ({showModal, handleModal, selectedCurrency, isDelete}) => {
    const dispatch = useDispatch();
    const [currency, setCurrency] = useState(selectedCurrency.currency);
    const [symbol, setSymbol] = useState(selectedCurrency.symbol);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(isDelete){
            dispatch(deleteCurrency(selectedCurrency.id));
        }else{
            const updatedCurrency = {
                ...selectedCurrency,
                currency,
                symbol
            }
            dispatch(updateCurrency(selectedCurrency.id, updatedCurrency));
        }
        handleModal();
    };
    const handleCurrencyChange = (event) => {
        const currency = event.target.value;
        setCurrency(currency);
    };
    const handleSymbolChange = (event) => {
        const symbol = event.target.value;
        setSymbol(symbol);
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>{isDelete ? "Delete " : "Edit "} currency</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicCurrency">
                        <Form.Label className={isDelete?"":"required"}>Currency</Form.Label>
                        <Form.Control
                            type="text"
                            name="currency"
                            defaultValue={selectedCurrency.currency}
                            required={true}
                            onChange={handleCurrencyChange}
                            readOnly={isDelete}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicCurrencyCode">
                        <Form.Label className={isDelete?"":"required"}>Code</Form.Label>
                        <Form.Control
                            type="text"
                            name="currencyCode"
                            defaultValue={selectedCurrency.currency}
                            required={true}
                            onChange={handleCurrencyChange}
                            readOnly={isDelete}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicSymbol">
                        <Form.Label className={isDelete?"":"required"}>Symbol</Form.Label>
                        <Form.Control
                            type="text"
                            name="symbol"
                            defaultValue={selectedCurrency.symbol}
                            required={true}
                            onChange={handleSymbolChange}
                            readOnly={isDelete}
                        />
                    </Form.Group>

                    <div className={"mt-2"}>
                        <button className={isDelete ? "btn btn-danger" : "btn btn-primary"} type={"submit"}>
                            <span className={"me-2"}><i><GrCurrency/></i></span>{isDelete ? "Delete" : "Save"}
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Cancel</button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateCurrencyModal;