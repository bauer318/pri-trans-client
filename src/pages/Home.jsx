import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {Navigate, useNavigate} from "react-router-dom";
import {get, save} from "../services/LocalStorageService";
import {refreshP} from "../App";
import axios from "axios";


const Home = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const user = get('connectedUser');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

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

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        const longedUser = {
            email: formData["email"],
            password: formData["password"]
        };
        axios.post('http://193.187.174.234:8080/api/login', longedUser)
            .then(res => {
                save("connectedUser", res.data?.userRs);
                save("jwtToken", `Bearer ${res.data?.jwtToken}`);
                setIsLoading(false);
                const user = get("connectedUser");
                redirectTo(user.userRole.userRole);
                refreshP();
            })
            .catch(err => {
                const errorResponse = err.response;
                setIsLoading(false);
                if (errorResponse?.status === 403 || errorResponse?.status === 400) {
                    setError("Bad credential");
                } else if (errorResponse?.status === 500) {
                    setError('Not connection');
                } else if (err.request) {
                    setError("Something went wrong please try again later");
                }
            });
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
        if (error) {
            setError(null);
        }
    }
    return (
        <>
            {
                user && (
                    <Navigate to={'/admin/users'} replace={true}/>
                )}
            <div className={"container row"}>
                <div className={"text-center mt-5"}>
                    <h3>Login</h3>
                </div>
                <div className={"col-md-8 mx-auto d-flex justify-content-center"}>
                    <Form onSubmit={handleSubmit} className={"login-form"}>
                        <Form.Group controlId="formBasicEmail" className={"form-outline mb-4"}>
                            <Form.Label className="required">Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@email.com"
                                name="email"
                                required={true}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="required">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                required={true}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {isLoading && <h4 className={"text-center text-secondary"}>Wait please...</h4>}
                        <div className={"mt-3 d-flex justify-content-around"}>
                            <button disabled={isLoading} className={"btn btn-primary w-100"} type={"submit"}>
                                Login
                            </button>
                        </div>
                        {
                            error &&
                            <p className={"text-danger text-center"}>{error}</p>
                        }
                    </Form>
                </div>
                <div className="d-flex align-items-center justify-content-center pb-4 mt-3">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button disabled={isLoading} type="button" className="btn btn-outline-info"
                            onClick={() => navigate('/register')}>Register
                    </button>
                </div>
            </div>

        </>

    );
};

export default Home;