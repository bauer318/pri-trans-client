import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../reducers/userReducers";
import {initializeCountries} from "../reducers/countryReducers";
import LoadingEffect from "../components/LoadingEffect";
import {removeItem, saveItem} from "../services/LocalStorageService";

const CreateAccount = () => {
    const [formData, setFormData] = useState({userRole: {userRole: "ROLE_CLIENT"}, termsAccepted: false});
    const [isLoading, setIsLoading] = useState(false);
    const [continueTo, setContinueTo] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const [errors, setErrors] = useState({
        termsAccepted: '',
    });
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
        saveItem("successMessage", "Le compte a été créé avec succès");
        navigate('/login');
    }

    const handleSubmit = event => {
        event.preventDefault();
        let validationErrors = {};
        if (!formData.termsAccepted) validationErrors.termsAccepted = 'Vous devez accepter les termes et conditions';
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setIsLoading(true);
        dispatch(createUser(formData, errorCallBack, toHome));
        setIsLoading(false);
        setContinueTo(true);
    }
    const handleChange = event => {
        const {name, value, type, checked} = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
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
                <h3>Créer votre compte</h3>
            </div>
            <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                <Form onSubmit={handleSubmit} className={"login-form"}>
                    <Form.Group controlId="formBasicEmail" className={"form-outline mb-4"}>
                        <Form.Label className={"required"}>Adresse e-mail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="example@email.com"
                            name="email"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className={"required"}>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="mot de passe"
                            name="password"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="country" className={"mt-2"}>
                        <Form.Label className={"required"}>Pays d'enregistrement</Form.Label>
                        <Form.Control as="select"
                                      name="country"
                                      required={true}
                                      onChange={handleCountryChange}
                        >
                            <option value="">{countries?.length > 0 ? "Sélectionner le pays" : "Loading..."}</option>
                            {countries?.map(country =>
                                <option value={country?.countryId}
                                        key={country?.countryId}>{country?.countryName}</option>
                            )}
                        </Form.Control>
                    </Form.Group>
                    <div className="mb-3 form-check mt-2">
                        <input
                            type="checkbox"
                            id="termsAccepted"
                            name="termsAccepted"
                            className="form-check-input"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        />
                        <label htmlFor="termsAccepted" className="form-check-label">
                            J'ai lu et j'accepte les <a href="/terms-and-conditions" target="_blank"
                                                        rel="noopener noreferrer">termes et conditions</a>
                        </label>
                        {errors.termsAccepted && <div className="text-danger">{errors.termsAccepted}</div>}
                    </div>
                    {isLoading && <LoadingEffect/>}
                    <div className={"mt-3 d-flex justify-content-around"}>
                        <button disabled={continueTo || !formData?.termsAccepted}
                                className={"btn me-5 btn-sm btn-primary w-50"} type={"submit"}>
                            Créer
                        </button>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default CreateAccount;