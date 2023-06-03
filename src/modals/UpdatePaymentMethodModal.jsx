import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaExchangeAlt} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deletePaymentMethod, updatePaymentMethod} from "../reducers/paymentMethodReducers";

const UpdatePaymentMethodModal = ({showModal, handleModal, selectedPaymentMethod, isDelete}) => {
    const [paymentM, setPaymentM] = useState(selectedPaymentMethod.paymentMethod);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        if(isDelete){
            dispatch(deletePaymentMethod(selectedPaymentMethod.id));
        }else{
            const updatedPm = {
                ...selectedPaymentMethod,
                paymentMethod: paymentM
            }
            dispatch(updatePaymentMethod(selectedPaymentMethod.id, updatedPm));
        }
        handleModal();
    };
    const handleChange = (event) => {
        const pm = event.target.value;
        setPaymentM(pm);
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>{isDelete ? "Delete " : "Edit "} payment method</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicPM">
                        <Form.Label className={isDelete?"":"required"}>Payment method</Form.Label>
                        <Form.Control
                            type="text"
                            name="paymentMethod"
                            defaultValue={selectedPaymentMethod.paymentMethod}
                            required={true}
                            onChange={handleChange}
                            readOnly={isDelete}
                        />
                    </Form.Group>

                    <div className={"mt-2"}>
                        <button className={isDelete ? "btn btn-danger" : "btn btn-primary"} type={"submit"}>
                            <span className={"me-2"}><i><FaExchangeAlt/></i></span>{isDelete ? "Delete" : "Save"}
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

export default UpdatePaymentMethodModal;