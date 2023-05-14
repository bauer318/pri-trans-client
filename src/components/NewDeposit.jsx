import React from 'react';
import {Form} from "react-bootstrap";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const NewDeposit = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/client/account/1/deposit/confirm')
    }
    return (
        <div className={"row mt-2"}>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>

                <Form onSubmit={handleSubmit}>
                    <h3>How much do you want to add?</h3>
                    <p className={"text-secondary"}>Your balance right now is 277.89 EUR</p>
                    <div className={"border border-secondary"}>
                        <div className={"text-primary ps-3"}>
                            Add
                        </div>
                        <div className={"d-flex mb-2"}>
                            <Form.Group>
                                <Form.Control
                                    type={"text"}
                                    className={"text-secondary border-0 me-5"}
                                    pattern={"[0-9]+"}
                                    placeholder={"100.00"}
                                    required={true}
                                />
                            </Form.Group>
                            <div className={"vr"}></div>
                            <div className={"ms-5"}>USD</div>
                        </div>
                    </div>
                    <Form.Group className={"mt-2"}>
                        <Form.Label className={"text-secondary"}>Paying with</Form.Label>
                        <Form.Control
                            as="select"
                            name={"paymentMethod"}
                            required={true}
                        >
                            <option value={""}>Select payment method</option>
                            <option>PM1</option>
                            <option>PM1</option>
                        </Form.Control>
                    </Form.Group>
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"}>Continue<span
                            className={"ms-2"}><i><AiOutlineArrowRight/></i></span>
                        </button>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default NewDeposit;