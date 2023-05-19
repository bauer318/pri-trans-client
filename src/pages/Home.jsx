import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {ImUserPlus} from "react-icons/im";
import {Navigate, useNavigate} from "react-router-dom";
import {get, save} from "../services/LocalStorageService";
import {refreshP} from "../App";
import ModeratorHome from "./ModeratorHome";
import {useDispatch, useSelector} from "react-redux";
import {initializeUsers} from "../reducers/userReducers";

const Home = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState("");
    const user = get('longedUser');
    const users = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeUsers());
    }, []);

    const redirectTo = userRole => {
        switch (userRole) {
            case 'ROLE_ADMIN':
                navigate('/admin/users');
                break;
            case 'ROLE_MODERATOR':
                navigate('moderator/users');
                break;
            case 'ROLE_AGENT':
                navigate('agent/account');
                break;
            case 'ROLE_CLIENT':
                navigate('client/home');
                break;
        }
    }


    const getUserRoleDetails = userRole => {
        switch (userRole) {
            case 'ROLE_ADMIN':
                return {
                    predPath: 'admin',
                    path: '/admin/users'
                };
            case 'ROLE_MODERATOR':
                return {
                    predPath: 'moderator',
                    path: '/moderator/users'
                };
            case 'ROLE_AGENT':
                return {
                    predPath: 'agent',
                    path: '/agent/account'
                };
            case 'ROLE_CLIENT':
                return {
                    predPath: 'client',
                    path: '/client/home'
                };
        }
    }
    const getUserRoleStr = useRole => {
        switch (Number(useRole)) {
            case 1:
                return 'ROLE_ADMIN';
            case 2:
                return 'ROLE_MODERATOR';
            case 3:
                return 'ROLE_AGENT';
            case 4:
                return 'ROLE_CLIENT';
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const connectedUser = users?.find(user => user.email === formData["email"] && user.password === formData["password"]);
        if (connectedUser) {
            const role = getUserRoleStr(connectedUser.role);
            const id = connectedUser.id;
            const predPath = getUserRoleDetails(role)["predPath"];
            const longedUser = {
                id: id,
                role: role,
                email: connectedUser.email,
                predPath:predPath
            }
            save('longedUser', longedUser);
            redirectTo(longedUser?.role);
            refreshP();
        } else {
            setError('Wrong input data');
        }
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    return (
        <>
            {
                user && (
                    <Navigate to={getUserRoleDetails(user.role)["path"]} replace={true}/>
                )}
            <div className={"container row"}>
                {error && <p className={"text-center text-danger"}>{error}</p>}
                <div className={"text-center mt-5"}>
                    <h3>Login</h3>
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
                        <div className={"mt-3 d-flex justify-content-around"}>
                            <button className={"btn btn-primary w-100"} type={"submit"}>
                                Login
                            </button>
                        </div>
                    </Form>
                </div>
                <div className="d-flex align-items-center justify-content-center pb-4 mt-3">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-info"
                            onClick={() => navigate('/register')}>Register
                    </button>
                </div>
            </div>
        </>

    );
};

export default Home;