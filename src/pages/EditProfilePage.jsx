import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import {formatDate, printError} from "../services/Utils";
import {initializeCountries} from "../reducers/countryReducers";
import {useDispatch, useSelector} from "react-redux";
import participantService from "../services/ParticipantService";
import personalInfo from "./PersonalInfo";
import personalInfoService from "../services/PersonalInfoService";
import {getItem} from "../services/LocalStorageService";

const EditProfilePage = () => {
    const location = useLocation();
    const [canEditEmail, setCanEditEmail] = useState(false);
    const [canChangePassword, setCanChangePassword] = useState(false);
    const [formData, setFormData] = useState({});
    const [passwordError, setPasswordError] = useState("");
    const [canEditInfos, setCanEditInfos] = useState(false);
    const [canWaitCountry, setCanWaitCountry] = useState(false);
    const [loadingEmail, setLoadingEmail] = useState(false);
    const [loadingPassword, setLoadingPassword] = useState(false);
    const [loadingInfos, setLoadingInfos] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const countryCallback = () => {
        setCanWaitCountry(false);
    }
    useEffect(() => {
        const state = location?.state?.participant;
        setCanWaitCountry(true);
        if (state) {
            setFormData(state);
            dispatch(initializeCountries(countryCallback));
        }
    }, []);

    const countries = useSelector(state => state.countries);
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        if (passwordError !== "") {
            setPasswordError("");
        }
        setFormData({...formData, [name]: value});
    }
    const handleEditEmailClick = () => {
        setCanEditEmail(true);
    }

    const emailCallback = () => {
        setCanEditEmail(false);
        setLoadingEmail(false);
    }

    const submitEmail = event => {
        event.preventDefault();
        setLoadingEmail(true);
        const emailPut = {
            participantId: formData?.userId,
            email: formData?.email
        }
        participantService.updateEmail(emailPut, emailCallback).then(
            response => {
                if (response) {
                    setFormData({...formData, "email": response});
                    alert("Email updated. You have to log in again");
                } else {
                    setFormData({...formData, "email": getItem("connectedUser")?.email})
                }
            }
        )
    }
    const arrayToString = arrayIn => {
        let result = "";
        arrayIn.map(el => result = result + el);
        return result;
    }

    const updatePhone = (telephoneArray) => {
        if (telephoneArray.length <= 13) {
            setFormData({...formData, ['phone']: arrayToString(telephoneArray)});
        }
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

    const handleOnClickPassword = () => {
        setCanChangePassword(true);
    }

    const wrongPasswordCallback = () => {
        alert("Wrong password");
        setCanChangePassword(false);
    }

    const submitPassword = event => {
        event.preventDefault();
        setLoadingPassword(true);
        if (areEqualsPassword(formData?.currentPassword, formData?.newPassword)) {
            setPasswordError("Same password");
            setCanChangePassword(true);
            setLoadingPassword(false);
        } else {
            const passwordPut = {
                email: formData?.email,
                currentPassword: formData?.currentPassword,
                newPassword: formData?.newPassword
            }
            participantService.updatePassword(passwordPut, passwordCallback, wrongPasswordCallback).then(
                response => {
                    if (response) {
                        alert("Password changed");
                        setFormData({...formData, "currentPassword": ""});
                        setFormData({...formData, "newPassword": ""});
                        setCanChangePassword(false);
                    }
                }
            ).catch(error => {
                printError(error);
                alert("Wrong password 2");
                passwordCallback();
            })

        }

    }
    const passwordCallback = () => {
        setCanChangePassword(false);
        setLoadingPassword(false);
    }

    const handleOnClickInfo = () => {
        setCanEditInfos(true);

    }

    const submitInfos = event => {
        event.preventDefault();
        if (formData?.birthdate) {
            const request = {
                userId: formData?.userId,
                nationality: formData?.nationality,
                lastname: formData?.lastname,
                firstname: formData?.firstname,
                middlename: formData?.middlename,
                birthdate: formatDate(formData?.birthdate),
                phone: formData?.phone,
                address: formData?.address
            }
            setLoadingInfos(true);
            personalInfoService.create(request, infosCallback, phoneNumberExist).then(
                response => {
                    if (response) {
                        alert("Infos updated");
                    }
                }
            )
        } else {
            setFormData({...formData, "birthdate": ""})
            alert("Add date");
        }
    }
    const phoneNumberExist = () => {
        alert("phone number already exist");
        setCanEditInfos(false);
    }
    const infosCallback = () => {
        setLoadingInfos(false);
        setCanEditInfos(false);
    }
    const areEqualsPassword = (oldPass, newPass) => {
        return oldPass === newPass;
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
    const handleDateChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    const getSubPath = () => {
        switch (getItem("connectedUser")?.userRole?.userRole) {
            case "ROLE_CLIENT":
                return "/client";
            case "ROLE_AGENT":
                return "/agent";
        }
    }

    return (
        <div className={"container"}>
            <div className={"row d-flex justify-content-center"}>
                <div className={"col col-lg-3 text-center mb-2"}>
                    <button className={"btn btn-secondary"} onClick={() => navigate(`${getSubPath()}/profile`)}>Back</button>
                </div>
                <div className={"col col-lg-3 text-center mb-2"}>
                    <h3 className={"text-center"}>Edit profile</h3>
                </div>
            </div>
            <div className={"row d-flex justify-content-center"}>
                <div className={"col col-lg-6"}>
                    <div className={"card mb-3 card-element"}>
                        <div className={"card-header"}><h4 className={canEditEmail ? "required" : ""}>Email address</h4>
                        </div>
                        <div className={"card-body"}>
                            <Form onSubmit={submitEmail}>
                                <Form.Group>
                                    <Form.Control
                                        type={"email"}
                                        name={"email"}
                                        className={"text-secondary border-1 mb-2"}
                                        value={formData?.email}
                                        required={true}
                                        readOnly={!canEditEmail}
                                        pattern={"^[a-z0-9_]+\@[a-z0-9]+\.[a-z0-9]+$"}
                                        onChange={handleOnChange}
                                    />
                                </Form.Group>
                                {canEditEmail && <button className={"btn btn-secondary"} type={"submit"}
                                                         disabled={loadingEmail}>{loadingEmail ? "Loading..." : "Save"}</button>}
                                {!canEditEmail &&
                                    <button className={"btn btn-primary"} onClick={handleEditEmailClick}
                                            disabled={loadingEmail}>{loadingEmail ? "Loading..." : "Edit"}</button>}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row d-flex justify-content-center"}>
                <div className={"col col-lg-6"}>
                    <div className={"card mb-3 card-element"}>
                        <div className={"card-header"}><h4>Change password</h4></div>
                        <div className={"card-body"}>
                            <Form onSubmit={submitPassword}>
                                <Form.Group>
                                    <Form.Label className={canChangePassword ? "required" : ""}>Current
                                        password</Form.Label>
                                    <Form.Control
                                        type={"password"}
                                        name={"currentPassword"}
                                        className={"text-secondary border-1 mb-2"}
                                        readOnly={!canChangePassword}
                                        value={formData?.currentPassword}
                                        required={true}
                                        onChange={handleOnChange}
                                    />
                                </Form.Group>
                                <Form.Label className={canChangePassword ? "required" : ""}>New password</Form.Label>
                                <Form.Group>
                                    <Form.Control
                                        type={"password"}
                                        name={"newPassword"}
                                        className={"text-secondary border-1 mb-2"}
                                        required={true}
                                        readOnly={!canChangePassword}
                                        value={formData?.newPassword}
                                        onChange={handleOnChange}
                                    />
                                </Form.Group>
                                {passwordError !== "" && <h5 className={"text-danger"}>{passwordError}</h5>}
                                {canChangePassword &&
                                    <button className={"btn btn-secondary"} type={"submit"}
                                            disabled={loadingPassword}>{loadingPassword ? "Loading..." : "Save"}</button>}
                                {!canChangePassword &&
                                    <button className={"btn btn-primary"} onClick={handleOnClickPassword}
                                            disabled={loadingPassword}>{loadingPassword ? "Loading..." : "Edit"}
                                    </button>}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row d-flex justify-content-center"}>
                <div className={"col col-lg-6"}>
                    <div className={"card mb-3 card-element"}>
                        <div className={"card-header"}><h4>Personal information</h4></div>
                        <div className={"card-body"}>
                            <Form onSubmit={submitInfos}>
                                {canWaitCountry && <p>Loading countries...</p>}
                                {!canWaitCountry && <Form.Group controlId="country">
                                    <Form.Label
                                        className={canEditInfos ? "required" : ""}>Nationality: {formData?.nationality}</Form.Label>
                                    <Form.Control as="select"
                                                  name="nationality"
                                                  defaultValue={formData?.nationality}
                                                  required={!formData?.nationality}
                                                  readOnly={!canEditInfos}
                                                  onChange={handleCountryChange}
                                    >
                                        <option value="">Select your country</option>
                                        {countries?.map(country =>
                                            <option value={country?.countryId}
                                                    key={country?.countryId}>{country?.countryName}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>}


                                <Form.Group controlId="firstName" className={"form-outline mb-4 mt-2"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>First name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="first name"
                                        value={formData?.firstname}
                                        name="firstname"
                                        pattern={"[a-zA-Z0-9 ]+"}
                                        maxLength={50}
                                        required={true}
                                        readOnly={!canEditInfos}
                                        onChange={handleOnChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="lastName" className={"form-outline mb-4"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="last name"
                                        name="lastname"
                                        pattern={"[a-zA-Z0-9 ]+"}
                                        value={formData?.lastname}
                                        required={true}
                                        maxLength={50}
                                        readOnly={!canEditInfos}
                                        onChange={handleOnChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="middleName" className={"form-outline mb-4"}>
                                    <Form.Label>Middle names</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="middle name"
                                        defaultValue={formData?.middlename}
                                        name="middlename"
                                        pattern={formData?.middlename ? "[a-zA-Z0-9 ]+" : ""}
                                        readOnly={!canEditInfos}
                                        maxLength={50}
                                        onChange={handleOnChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="birthDate" className={"form-outline mb-4"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>Date of birth
                                        [mm/DD/YYYY]</Form.Label>
                                    <Form.Control
                                        type={"date"}
                                        name="birthdate"
                                        value={formData?.birthdate}
                                        required={true}
                                        readOnly={!canEditInfos}
                                        onChange={handleDateChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="address" className={"form-outline mb-4 mt-2"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>Full address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="home address"
                                        name="address"
                                        value={formData?.address}
                                        required={true}
                                        maxLength={50}
                                        readOnly={!canEditInfos}
                                        onChange={handleOnChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="phone" className={"form-outline mb-4"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>Phone
                                        [081-345-67-89]</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={"012-345-67-89"}
                                        name="phone"
                                        pattern={"[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"}
                                        value={formData?.phone}
                                        required={true}
                                        readOnly={!canEditInfos}
                                        onChange={handlePhoneChange}
                                        onPaste={handlePhoneChange}
                                    />
                                </Form.Group>
                                {canEditInfos && <button className={"btn btn-secondary"} type={"submit"}
                                                         disabled={loadingInfos}>{loadingInfos ? "Loading..." : "Save"}</button>}
                                {!canEditInfos &&
                                    <button className={"btn btn-primary"} onClick={handleOnClickInfo}
                                            disabled={loadingInfos}>{loadingInfos ? "Loading..." : "Edit"}</button>}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePage;