import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {initializeCountries} from "../reducers/countryReducers";
import {getItem} from "../services/LocalStorageService";
import {formatDate} from "../services/Utils";

const PersonalInfo = () => {
    const {state} = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const storedInfo = state?.infos;
    const [formData, setFormData] = useState(state?.infos);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [connectedUser, setConnectedUser] = useState({});
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
        setIsLoading(false);
    }
    useEffect(() => {
        setCanWait(true);
        dispatch(initializeCountries(callBack));
        setConnectedUser(getItem('loginUSer'));
    }, []);
    const countries = useSelector(state => state.countries);

    const handleSubmit = event => {
        setIsLoading(true);
        event.preventDefault();
        navigate(`/register/${connectedUser?.userId}/personal-info/address`, {state: {infos: formData}});
        setIsLoading(false);
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
        if (!formData.userId) {
            setFormData({...formData, ['userId']: connectedUser?.userId});
        }
    }
    const handleDateChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: formatDate(value)});
    }
    const handleCountryChange = event => {
        const id = Number(event.target.value);
        if (id) {
            setFormData({
                ...formData,
                [event.target.name]: countries?.find(country => country.countryId === id)?.countryName
            });
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
                        <Form.Label className={"required"}>Nationality</Form.Label>
                        <Form.Control as="select"
                                      name="nationality"
                                      defaultValue={storedInfo?.country}
                                      required={true}
                                      onChange={handleCountryChange}
                        >
                            <option value="">Select your country</option>
                            {countries?.map(country =>
                                <option value={country?.countryId}
                                        key={country?.countryId}>{country?.countryName}</option>
                            )}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="firstName" className={"form-outline mb-4 mt-2"}>
                        <Form.Label className={"required"}>First name</Form.Label>
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
                        <Form.Label className={"required"}>Last name</Form.Label>
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
                            name="middlename"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="birthDate" className={"form-outline mb-4"}>
                        <Form.Label className={"required"}>Date of birth [mm/DD/YYYY]</Form.Label>
                        <Form.Control
                            type={"date"}
                            placeholder="first name"
                            name="birthdate"
                            defaultValue={storedInfo?.birthDate}
                            required={true}
                            onChange={handleDateChange}
                        />
                    </Form.Group>
                    {isLoading && <h4 className={"text-center text-secondary"}>Wait please...</h4>}
                    <div className={"mt-3 d-flex justify-content-end"}>
                        <button className={"btn btn-primary"} type={"submit"} disabled={isLoading}>
                            Continue <span><i><AiOutlineArrowRight size={28}/></i></span>
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default PersonalInfo;