import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaEdit} from "react-icons/fa";

const ClientEditPaymentMethodModal = ({paymentMethod, showModal, handleModal}) => {
    const [pm, setPm] = useState(paymentMethod?.paymentMethod);
    const [number, setNumber] = useState(paymentMethod?.number);
    const [accountName, setAccountName] = useState(paymentMethod?.accountName);
    const [defaultPm, setDefaultPm] = useState(null);
    const paymentsM = [
        {
            id:1,
            pm:"Airtel money"
        },
        {
            id:2,
            pm:"M-pesa"
        },
        {
            id:3,
            pm:"Sberbank"
        }
    ];
    const foundSourcePm = id =>{
        return paymentsM.find(pm=>pm.id===id);
    }
    if(defaultPm){
        ;
    }else{
        setDefaultPm(foundSourcePm(paymentMethod?.paymentMethod.id));
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const paymentM = {
            paymentMethod:pm,
            number:number,
            accountName:accountName
        }
        //update user's payment method
        handleModal();
    }
    const handlePMChange = event =>{
        const pm = Number(event.target.value);
        setPm(foundSourcePm(pm));
    }
    const handleNumberChange = event =>{
        const number = event.target.value;
        setNumber(number);
    }

    const handleAccountNameChange = event=>{
        const accountName = event.target.value;
        setAccountName(accountName);
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit payment method</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="pm">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Control
                            as="select"
                            name="pm"
                            required={true}
                            onChange={handlePMChange}
                        >
                            <option value={defaultPm?.id}>{defaultPm?.pm}</option>
                            {
                                paymentsM?.map(pm=>
                                    <option value={pm.id} key={pm.id}>{pm.pm}</option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="num">
                        <Form.Label>Number</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={paymentMethod?.number}
                            name="number"
                            required={true}
                            onChange={handleNumberChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="accountName">
                        <Form.Label>Account name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={paymentMethod?.accountName}
                            name="accountName"
                            required={true}
                            onChange={handleAccountNameChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}><span className={"me-2"}><i><FaEdit/></i></span>Edit
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

export default ClientEditPaymentMethodModal;