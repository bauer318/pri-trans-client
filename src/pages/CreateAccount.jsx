import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const CreateAccount = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const countries = [
        {
            id: 1,
            country: "DR Congo"
        },
        {
            id: 2,
            country: "Russia"
        },
        {
            id: 3,
            country: "Angola"
        }
    ]
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        navigate('/register/1/personal-info');
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    const handleCountryChange = event => {
        const id = Number(event.target.value);
        if (id) {
            setFormData({...formData, [event.target.name]: countries.find(country => country.id === id)});
        }
    }
    return (
        <div className={"container row"}>
            <div className={"text-center mt-6"}>
                <h3>Create your account</h3>
            </div>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                <Form onSubmit={handleSubmit} className={"login-form"}>
                    <Form.Group controlId="formBasicEmail" className={"form-outline mb-4"}>
                        <Form.Label>email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="example@email.com"
                            name="email"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="country" className={"mt-2"}>
                        <Form.Label>Country of registration</Form.Label>
                        <Form.Control as="select"
                                      name="country"
                                      required={true}
                                      onChange={handleCountryChange}
                        >
                            <option value="">Select country</option>
                            {countries?.map(country =>
                                <option value={country.id} key={country.id}>{country.country}</option>
                            )}
                        </Form.Control>
                    </Form.Group>

                    <div className={"mt-3 d-flex justify-content-around"}>
                        <button className={"btn btn-primary w-100"} type={"submit"}>
                            Create
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default CreateAccount;