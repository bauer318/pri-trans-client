import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../reducers/userReducers";
import {initializeCountries} from "../reducers/countryReducers";
import LoadingEffect from "../components/LoadingEffect";
import {removeItem, saveItem} from "../services/LocalStorageService";

const CreateAccount = () => {
    const [formData, setFormData] = useState({userRole: {userRole: "ROLE_CLIENT"}});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [continueTo, setContinueTo] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        dispatch(initializeCountries(callBack));
        removeItem('connectedUser');
        removeItem('jwtToken');
    }, []);
    const countries = useSelector(state => state.countries);


    const errorCallBack = () => {
        setIsLoading(false);
        setContinueTo(false);
    }
    const toHome = () => {
        saveItem("successMessage", "The account has been successfully created");
        navigate('/');
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        dispatch(createUser(formData, errorCallBack, toHome));
        setIsLoading(false);
        setContinueTo(true);
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    const handleCountryChange = event => {
        const id = Number(event.target.value);
        if (id) {
            const selectedCountry = {
                countryId: id
            };
            setFormData({...formData, [event.target.name]: selectedCountry});
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
                        <Form.Label className={"required"}>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="example@email.com"
                            name="email"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className={"required"}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="country" className={"mt-2"}>
                        <Form.Label className={"required"}>Country of registration</Form.Label>
                        <Form.Control as="select"
                                      name="country"
                                      required={true}
                                      onChange={handleCountryChange}
                        >
                            <option value="">{countries?.length > 0 ? "Select country" : "Loading..."}</option>
                            {countries?.map(country =>
                                <option value={country?.countryId}
                                        key={country?.countryId}>{country?.countryName}</option>
                            )}
                        </Form.Control>
                    </Form.Group>
                    {isLoading && <LoadingEffect/>}
                    <div className={"mt-3 d-flex justify-content-around"}>
                        <button disabled={continueTo} className={"btn me-5 btn-primary w-50"} type={"submit"}>
                            Create
                        </button>
                        {/*<button disabled={!continueTo} onClick={handleContinueTo} className={"btn btn-primary w-50"}
                                type={"button"} style={{display: !continueTo ? 'none' : ''}}>
                            Continue
                        </button>*/}
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default CreateAccount;