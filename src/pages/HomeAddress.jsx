import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {MdPostAdd} from "react-icons/md";
import {useDispatch} from "react-redux";
import {createPersonalInfo} from "../reducers/PersonalInfoReducers";
import {getItem} from "../services/LocalStorageService";

const HomeAddress = () => {
    const {state} = useLocation();
    const [formData, setFormData] = useState(state?.infos);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const [telephone, setTelephone] = useState("");

    useEffect(() => {
        if (!formData?.phone) {
            setFormData({...formData, ['phone']: ""});
        }
    }, []);
    const redirectTo = userRole => {
        switch (userRole) {
            case 'ROLE_ADMIN':
                navigate('/admin/users');
                break;
            case 'ROLE_MODERATOR':
                navigate('/moderator/users');
                break;
            case 'ROLE_AGENT':
                navigate('/agent/account');
                break;
            case 'ROLE_CLIENT':
                navigate('/client/home');
                break;
        }
    }
    const toUserHomeCallback = () => {
        setIsLoading(false);
        redirectTo(getItem('connectedUser')?.userRole.userRole);
    }
    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        dispatch(createPersonalInfo(formData, toUserHomeCallback));

    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    const handleBack = () => {
        navigate(`/register/${formData?.userId}/personal-info`, {state: {infos: formData}});
    }

    const arrayToString = arrayIn => {
        let result = "";
        arrayIn.map(el => result = result + el);
        return result;
    }
    const handlePhoneChange = event => {
        const telephoneArray = event.target.value?.split("");
        const length = telephoneArray.length;
        if (length === 4 || length === 8 || length === 11) {
            const k = telephoneArray[length - 1];
            if (k !== "-") {
                telephoneArray[length - 1] = "-";
                telephoneArray[length] = k;
            }
        }
        updatePhone(telephoneArray);
    }
    const updatePhone = (telephoneArray) => {
        if (telephoneArray.length <= 13) {
            setFormData({...formData, ['phone']: arrayToString(telephoneArray)});
        }
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
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={"012-345-67-89"}
                            name="phone"
                            value={formData?.phone}
                            required={true}
                            onChange={handlePhoneChange}
                        />
                    </Form.Group>

                    <div className={"mt-3 d-flex justify-content-around"}>
                        <button disabled={isLoading} className={"btn btn-outline-secondary"}
                                onClick={handleBack}><span><i><AiOutlineArrowLeft
                            size={28}/></i></span> Back
                        </button>
                        <button disabled={isLoading} className={"btn btn-primary"} type={"submit"}>
                            <span><i><MdPostAdd size={28}/></i></span>Add infos
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default HomeAddress;