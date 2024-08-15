import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import {formatDate, getTelephoneArray, printError} from "../services/Utils";
import {initializeCountries} from "../reducers/countryReducers";
import {useDispatch, useSelector} from "react-redux";
import participantService from "../services/ParticipantService";
import personalInfoService from "../services/PersonalInfoService";
import {getItem, removeItem} from "../services/LocalStorageService";
import {logout, refreshP} from "../App";

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
    const [currentCountry, setCurrentCountry] = useState("");
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
            setCurrentCountry(state?.nationality);
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
                    logout();
                    removeItem("connectedUser");
                    navigate('/');
                    refreshP();
                } else {
                    setFormData({...formData, "email": getItem("connectedUser")?.email})
                }
            }
        ).catch(error => {
            printError(error);
        })
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
        updatePhone(getTelephoneArray(event));
    }

    const handleOnClickPassword = () => {
        setCanChangePassword(true);
    }

    const wrongPasswordCallback = () => {
        alert("Mauvais mot de passe");
        setCanChangePassword(false);
    }

    const submitPassword = event => {
        event.preventDefault();
        setLoadingPassword(true);
        if (areEqualsPassword(formData?.currentPassword, formData?.newPassword)) {
            setPasswordError("Changer de mot de passe");
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
                        alert("Le mot de pass a été modifié");
                        setFormData({...formData, "currentPassword": ""});
                        setFormData({...formData, "newPassword": ""});
                        setCanChangePassword(false);
                        navigate('/client/profile');
                    }
                }
            ).catch(error => {
                printError(error);
                alert("Mauvais mot de passe");
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
                        alert("Les infos ont été modifiées");
                        navigate('/client/profile');
                    }
                }).catch(error => {
                printError(error);
            })
        } else {
            setFormData({...formData, "birthdate": ""})
            alert("Ajouter la date");
        }
    }
    const phoneNumberExist = () => {
        alert("Ce numéro de telephone existe déjà");
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
    const handleOnClickInputInfos = () => {
        if (!canEditInfos) {
            alert("Cliquez sur Changer ou ajouter")
        }
    }
    const handleOnClickInputEmail = () => {
        if (!canEditEmail) {
            alert('Cliquez sur changer');
        }
    }
    const handleOnClickInputPassword = () => {
        if (!canChangePassword) {
            alert('Cliquez sur changer');
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
                    <button className={"btn btn-secondary"} onClick={() => navigate(`${getSubPath()}/profile`)}>Retour
                    </button>
                </div>
                <div className={"col col-lg-3 text-center mb-2"}>
                    <h3 className={"text-center"}>Modifier le profil</h3>
                </div>
            </div>
            <div className={"row d-flex justify-content-center"}>
                <div className={"col col-lg-6"}>
                    <div className={"card mb-3 card-element"}>
                        <div className={"card-header"}><h4 className={canEditEmail ? "required" : ""}>Address
                            e-mail</h4>
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
                                        onPaste={handleOnChange}
                                        onClick={handleOnClickInputEmail}
                                    />
                                </Form.Group>
                                {canEditEmail && <button className={"btn btn-secondary"} type={"submit"}
                                                         disabled={loadingEmail}>{loadingEmail ? "Loading..." : "Sauvegarder"}</button>}
                                {!canEditEmail &&
                                    <button className={"btn btn-primary"} onClick={handleEditEmailClick}
                                            disabled={loadingEmail}>{loadingEmail ? "Loading..." : "Changer"}</button>}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row d-flex justify-content-center"}>
                <div className={"col col-lg-6"}>
                    <div className={"card mb-3 card-element"}>
                        <div className={"card-header"}><h4>Changer le mot de passe</h4></div>
                        <div className={"card-body"}>
                            <Form onSubmit={submitPassword}>
                                <Form.Group>
                                    <Form.Label className={canChangePassword ? "required" : ""}>Ancien mot de
                                        passe</Form.Label>
                                    <Form.Control
                                        type={"password"}
                                        name={"currentPassword"}
                                        className={"text-secondary border-1 mb-2"}
                                        readOnly={!canChangePassword}
                                        value={formData?.currentPassword}
                                        required={true}
                                        onChange={handleOnChange}
                                        onPaste={handleOnChange}
                                        onClick={handleOnClickInputPassword}
                                    />
                                </Form.Group>
                                <Form.Label className={canChangePassword ? "required" : ""}>Nouveau mot de
                                    passe</Form.Label>
                                <Form.Group>
                                    <Form.Control
                                        type={"password"}
                                        name={"newPassword"}
                                        className={"text-secondary border-1 mb-2"}
                                        required={true}
                                        readOnly={!canChangePassword}
                                        value={formData?.newPassword}
                                        onChange={handleOnChange}
                                        onPaste={handleOnChange}
                                    />
                                </Form.Group>
                                {passwordError !== "" && <h5 className={"text-danger"}>{passwordError}</h5>}
                                {canChangePassword &&
                                    <button className={"btn btn-secondary"} type={"submit"}
                                            disabled={loadingPassword}>{loadingPassword ? "Loading..." : "Sauvegarder"}</button>}
                                {!canChangePassword &&
                                    <button className={"btn btn-primary"} onClick={handleOnClickPassword}
                                            disabled={loadingPassword}>{loadingPassword ? "Loading..." : "Changer"}
                                    </button>}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row d-flex justify-content-center"}>
                <div className={"col col-lg-6"}>
                    <div className={"card mb-3 card-element"}>
                        <div className={"card-header"}><h4>Informations personnelles</h4></div>
                        <div className={"card-body"}>
                            <Form onSubmit={submitInfos}>
                                {canWaitCountry && <p>Loading countries...</p>}
                                {!canWaitCountry && <Form.Group controlId="country">
                                    <Form.Label
                                        className={canEditInfos ? "required" : ""}>Nationalité: {formData?.nationality}</Form.Label>
                                    <Form.Control as="select"
                                                  name="nationality"
                                                  defaultValue={formData?.nationality}
                                                  required={currentCountry === ""}
                                                  readOnly={!canEditInfos}
                                                  onChange={handleCountryChange}
                                                  onPaste={handleCountryChange}
                                    >
                                        <option
                                            value="">{currentCountry ? currentCountry : "Sélectionner..."}</option>
                                        {countries?.map(country =>
                                            <option value={country?.countryId}
                                                    key={country?.countryId}>{country?.countryName}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>}


                                <Form.Group controlId="firstName" className={"form-outline mb-4 mt-2"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>Prénom</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Votre prénom"
                                        value={formData?.firstname}
                                        name="firstname"
                                        pattern={"[a-zA-Z0-9 ]+"}
                                        maxLength={50}
                                        required={true}
                                        readOnly={!canEditInfos}
                                        onChange={handleOnChange}
                                        onClick={handleOnClickInputInfos}
                                        onPaste={handleOnChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="lastName" className={"form-outline mb-4"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>Nom</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Votre nom"
                                        name="lastname"
                                        pattern={"[a-zA-Z0-9 ]+"}
                                        value={formData?.lastname}
                                        required={true}
                                        maxLength={50}
                                        readOnly={!canEditInfos}
                                        onChange={handleOnChange}
                                        onClick={handleOnClickInputInfos}
                                        onPaste={handleOnChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="middleName" className={"form-outline mb-4"}>
                                    <Form.Label>Autres noms</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="ex. post-nom"
                                        defaultValue={formData?.middlename}
                                        name="middlename"
                                        pattern={formData?.middlename ? "[a-zA-Z0-9 ]+" : ""}
                                        readOnly={!canEditInfos}
                                        maxLength={50}
                                        onChange={handleOnChange}
                                        onClick={handleOnClickInputInfos}
                                        onPaste={handleOnChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="birthDate" className={"form-outline mb-4"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>Date de naissance
                                        [mm/DD/YYYY]</Form.Label>
                                    <Form.Control
                                        type={"date"}
                                        name="birthdate"
                                        value={formData?.birthdate}
                                        required={true}
                                        readOnly={!canEditInfos}
                                        onChange={handleDateChange}
                                        onClick={handleOnClickInputInfos}
                                        onPaste={handleDateChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="address" className={"form-outline mb-4 mt-2"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>Votre address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="11, av. Victoire, Kikwit"
                                        name="address"
                                        value={formData?.address}
                                        required={true}
                                        maxLength={50}
                                        readOnly={!canEditInfos}
                                        onChange={handleOnChange}
                                        onClick={handleOnClickInputInfos}
                                        onPaste={handleOnChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="phone" className={"form-outline mb-4"}>
                                    <Form.Label className={canEditInfos ? "required" : ""}>Telephone
                                        [081-345-67-89] sans code du pays</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={"081-345-67-89"}
                                        name="phone"
                                        pattern={"[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"}
                                        value={formData?.phone}
                                        required={true}
                                        readOnly={!canEditInfos}
                                        onChange={handlePhoneChange}
                                        onPaste={handlePhoneChange}
                                        onClick={handleOnClickInputInfos}
                                        onInput={handlePhoneChange}
                                    />
                                </Form.Group>
                                {canEditInfos && <button className={"btn btn-secondary"} type={"submit"}
                                                         disabled={loadingInfos}>{loadingInfos ? "Loading..." : "Sauvegarder"}</button>}
                                {!canEditInfos &&
                                    <button className={"btn btn-primary"} onClick={handleOnClickInfo}
                                            disabled={loadingInfos}>{loadingInfos ? "Loading..." : "Changer ou ajouter"}</button>}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePage;