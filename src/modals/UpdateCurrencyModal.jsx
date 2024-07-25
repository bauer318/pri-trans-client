import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {GrCurrency} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {deleteCurrency, updateCurrency} from "../reducers/currencyReducers";
import {getCurrencyByName} from "../services/Utils";

const UpdateCurrencyModal = ({showModal, handleModal, selectedCurrency, isDelete}) => {
    const dispatch = useDispatch();
    const [currency, setCurrency] = useState(selectedCurrency.currency);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isDelete) {
            dispatch(deleteCurrency(selectedCurrency.currencyId));
        } else {
            const currencyFromAPI = getCurrencyByName(currency);
            const updatedCurrency = {
                code: currencyFromAPI?.code,
                symbol: currencyFromAPI?.symbol,
                currency,
            }
            dispatch(updateCurrency(selectedCurrency.currencyId, updatedCurrency));
        }
        handleModal();
    };
    const handleCurrencyChange = (event) => {
        const currency = event.target.value;
        setCurrency(currency);
    };

    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>{isDelete ? "Delete " : "Edit "} currency</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicCurrency">
                        <Form.Label>Currency</Form.Label>
                        <Form.Control
                            type="text"
                            name="currency"
                            defaultValue={selectedCurrency.currency}
                            required={true}
                            onChange={handleCurrencyChange}
                            readOnly={isDelete}
                        />
                    </Form.Group>

                    <div className={"mt-2"}>
                        <button disabled={isDelete} className={isDelete ? "btn btn-danger" : "btn btn-primary"} type={"submit"}>
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