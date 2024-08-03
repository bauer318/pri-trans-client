import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {TfiWallet} from "react-icons/tfi";
import {useDispatch, useSelector} from "react-redux";
import {initializeNeedUserCurrencies} from "../reducers/currencyReducers";
import {createAccount} from "../reducers/accountReducer";
import {getItem} from "../services/LocalStorageService";
import ToastNotification from "./toastNotification";

const AddBalanceModal = ({showModal, handleModal}) => {
    const dispatch = useDispatch();
    const [currencyId, setCurrencyId] = useState(0);
    const [notify, setNotify] = useState(false);
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
        handleModal();
    }
    useEffect(() => {
        const user = getItem('connectedUser');
        dispatch(initializeNeedUserCurrencies(user?.userId));
    }, []);
    const currencies = useSelector(state => state.currencies);
    const handleSubmit = (event) => {
        setNotify(true);
        event.preventDefault();
        if (currencyId > 0) {
            setCanWait(true);
            dispatch(createAccount(currencyId, callBack));
        }
    }
    const handleBalanceChange = (event) => {
        const currencyIdP = Number(event.target.value);
        if (currencyIdP >= 1)
            setCurrencyId(currencyIdP);

    }
    return (
        <>
            <Modal show={showModal} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Ouvrir un solde</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicMainCurrency">
                            <Form.Label>Monnaie du solde</Form.Label>
                            <Form.Control as="select"
                                          name="balance"
                                          required={true}
                                          onChange={handleBalanceChange}
                            >
                                <option
                                    value="">{currencies?.length === 0 ? "Vous avez toutes les monnaies" : "Sélectionner une monnaie"}</option>
                                {
                                    currencies?.map((currency, key) =>
                                        <option value={currency?.currencyId} key={key}>{currency?.currency}</option>
                                    )
                                }
                            </Form.Control>
                        </Form.Group>
                        <div className={"mt-2"}>
                            <button className={"btn btn-primary"} type={"submit"} disabled={canWait}><span
                                className={"me-2"}><i><TfiWallet/></i></span>Ouvrir
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className={"btn btn-secondary"} onClick={handleModal}>Quitter</button>
                </Modal.Footer>
            </Modal>
            {notify && <ToastNotification message={"Added"}/>}
        </>

    );
};

export default AddBalanceModal;