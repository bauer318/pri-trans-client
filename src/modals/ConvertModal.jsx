import React from 'react';
import {Form, Modal} from "react-bootstrap";
import {TbArrowsExchange2} from "react-icons/tb";
import {useNavigate} from "react-router-dom";

const ConvertModal = ({showModal, handleModal, fromAmount, toAmount, liveRate}) => {
    console.log('convert modal');
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        //Convert process

        navigate('/client/account/');
    }

    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Does everything looks right?</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="fromAmount">
                        <Form.Label>You're converting</Form.Label>
                        <Form.Control type={"text"}
                                      name="fromAmount"
                                      readOnly={true}
                                      value={fromAmount}
                        />
                    </Form.Group>

                    <Form.Group controlId="toAmount">
                        <Form.Label>To</Form.Label>
                        <Form.Control type={"text"}
                                      name="toAmount"
                                      readOnly={true}
                                      value={toAmount}
                        />
                    </Form.Group>

                    <Form.Group controlId="fromAmount">
                        <Form.Label>Rate</Form.Label>
                        <Form.Control type={"text"}
                                      name="rate"
                                      readOnly={true}
                                      value={liveRate}
                        />
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}>Convert<span className={"ms-2"}><i><TbArrowsExchange2/></i></span>
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

export default ConvertModal;