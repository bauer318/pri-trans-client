import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {ImUserPlus} from "react-icons/im";
import {FaEdit} from "react-icons/fa";

const EditWalletModal = ({wallet, showModal, handleModal}) => {
    const [pm, setPm] = useState(wallet?.paymentMethod);
    const [number, setNumber] = useState(wallet?.number);
    const [accountName, setAccountName] = useState(wallet?.accountName);
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
        setDefaultPm(foundSourcePm(wallet?.paymentMethod.id));
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const paymentM = {
            paymentMethod:pm,
            number:number,
            accountName:accountName
        }
        //update user's wallet
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
                <Modal.Title>Edit wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="pm">
                        <Form.Label className={"required"}>Payment Method</Form.Label>
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
                        <Form.Label className={"required"}>Wallet's number</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={wallet?.number}
                            name="number"
                            required={true}
                            onChange={handleNumberChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="accountName">
                        <Form.Label className={"required"}>Account name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={wallet?.accountName}
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

export default EditWalletModal;