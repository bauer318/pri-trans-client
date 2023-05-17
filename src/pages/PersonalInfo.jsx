import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import {AiOutlineArrowRight} from "react-icons/ai";

const PersonalInfo = () => {
    const {state} = useLocation();
    const storedInfo = state?.infos;
    const [formData, setFormData] = useState(state?.infos);
    const navigate = useNavigate();
    const wordCountries = [
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
        },
        {
            id:4,
            country: "Others"
        }
    ]
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        navigate('/register/1/personal-info/address',{state:{infos : formData}});
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    const handleCountryChange = event => {
        const id = Number(event.target.value);
        if (id) {
            setFormData({...formData, [event.target.name]: wordCountries.find(country => country.id === id)});
        }
    }
    return (
        <div className={"container row"}>
            <div className={"text-center mt-6"}>
                <h3>Personal information</h3>
            </div>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                <Form onSubmit={handleSubmit} className={"login-form"}>
                    <Form.Group controlId="country">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control as="select"
                                      name="country"
                                      defaultValue={storedInfo?.country}
                                      required={true}
                                      onChange={handleCountryChange}
                        >
                            <option value="">Select your country</option>
                            {wordCountries?.map(country =>
                                <option value={country.id} key={country.id}>{country.country}</option>
                            )}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="firstName" className={"form-outline mb-4 mt-2"}>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="first name"
                            defaultValue={storedInfo?.firstname}
                            name="firstname"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="lastName" className={"form-outline mb-4"}>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="first name"
                            name="lastname"
                            defaultValue={storedInfo?.lastname}
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="middleName" className={"form-outline mb-4"}>
                        <Form.Label>Middle names</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="middle name"
                            defaultValue={storedInfo?.middleName}
                            name="middleName"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="birthDate" className={"form-outline mb-4"}>
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control
                            type={"date"}
                            placeholder="first name"
                            name="birthDate"
                            defaultValue={storedInfo?.birthDate}
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <div className={"mt-3 d-flex justify-content-end"}>
                        <button className={"btn btn-primary"} type={"submit"}>
                            Continue <span><i><AiOutlineArrowRight size={28}/></i></span>
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default PersonalInfo;