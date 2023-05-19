import React from 'react';
import {Form, Modal} from "react-bootstrap";
import {FaCity} from "react-icons/fa";
import {TfiWallet} from "react-icons/tfi";

const AddBalanceModal = ({showModal, handleModal}) => {
    const balances = [
        {
            "id":1,
            "devise":"USD Dollar"
        },
        {
            "id":2,
            "devise":"Russian Ruble"
        },
    ];
    const handleSubmit = (event) =>{
        handleModal();
    }
    const handleBalanceChange = (event)=>{
        const balanceId = Number(event.target.value);
        const balance = balances.find(balance=>balance.id===balanceId);
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Open a balance</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicMainCurrency">
                        <Form.Label>Balance's devise</Form.Label>
                        <Form.Control as="select"
                                      name="balance"
                                      required={true}
                                      onChange={handleBalanceChange}
                        >
                            <option value="">Select devise</option>
                            {
                                balances.map(balance=>
                                    <option value={balance.id} key={balance.id}>{balance.devise}</option>
                                )
                            }

                        </Form.Control>
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}><span className={"me-2"}><i><TfiWallet/></i></span>Open
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddBalanceModal;