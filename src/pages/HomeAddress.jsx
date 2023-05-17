import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {MdPostAdd} from "react-icons/md";

const HomeAddress = () => {
    const {state} = useLocation();
    const [formData, setFormData] = useState(state?.infos);
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        //add infos
        navigate('/client/home', {state:{user:1}});
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    const handleBack = () => {
        navigate('/register/1/personal-info', {state: {infos: formData}});
    }
    return (
        <div className={"container row"}>
            <div className={"text-center mt-6"}>
                <h3>Personal information</h3>
            </div>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                <Form onSubmit={handleSubmit} className={"login-form"}>
                    <Form.Group controlId="address" className={"form-outline mb-4 mt-2"}>
                        <Form.Label>Full address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="home address"
                            name="address"
                            defaultValue={state?.infos?.address}
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="phone" className={"form-outline mb-4"}>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="777-985-852"
                            name="phone"
                            defaultValue={state?.infos?.phone}
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <div className={"mt-3 d-flex justify-content-around"}>
                        <button className={"btn btn-outline-secondary"}
                                onClick={handleBack}><span><i><AiOutlineArrowLeft
                            size={28}/></i></span> Back
                        </button>
                        <button className={"btn btn-primary"} type={"submit"}>
                            <span><i><MdPostAdd size={28}/></i></span>Add infos
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default HomeAddress;