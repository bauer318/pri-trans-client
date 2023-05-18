import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaEdit, FaPlus} from "react-icons/fa";

const ClientAddPaymentMethodModal = ({showModal, handleModal}) => {
    console.log('C add pm  modal');
    const [formData, setFormData] = useState({});
    const paymentsM = [
        {
            id: 1,
            pm: "Airtel money"
        },
        {
            id: 2,
            pm: "M-pesa"
        },
        {
            id: 3,
            pm: "Sberbank"
        }
    ];
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);

        handleModal();
    }
    const handlePMChange = event => {
        const id = Number(event.target.value);
        if(id){
            const pm = paymentsM.find(pm=>pm.id===id);
            setFormData({...formData, [event.target.name]: pm});
        }

    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add payment method</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="pm">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Control
                            as="select"
                            name="paymentMethod"
                            required={true}
                            onChange={handlePMChange}
                        >
                            <option value="">Select payment method</option>
                            {
                                paymentsM?.map(pm =>
                                    <option value={pm.id} key={pm.id}>{pm.pm}</option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="num">
                        <Form.Label>Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"wallet's number"}
                            name="number"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="accountName">
                        <Form.Label>Account name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"wallet's user name"}
                            name="accountName"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}><span className={"me-2"}><i><FaPlus/></i></span>Add
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

export default ClientAddPaymentMethodModal;