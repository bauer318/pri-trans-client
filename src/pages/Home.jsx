import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {ImUserPlus} from "react-icons/im";
import {Navigate, useNavigate} from "react-router-dom";
import {get, save,remove} from "../services/LocalStorageService";
import {refreshP} from "../App";
import ModeratorHome from "./ModeratorHome";
import {useDispatch, useSelector} from "react-redux";
import {login} from '../reducers/userReducers'
import axios from "axios";


const Home = () => {
    const [formData, setFormData] = useState({});
    const [error,setError] = useState(null);
    const user = get('connectedUser');
    const navigate = useNavigate();
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
    const getUserHomePath = userRole => {
        switch (userRole) {
            case 'ROLE_ADMIN':
                return '/admin/users';
            case 'ROLE_MODERATOR':
                return 'moderator/users';
            case 'ROLE_AGENT':
                return 'agent/account';
            case 'ROLE_CLIENT':
                return 'client/home';
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const longedUser = {
            email: formData["email"],
            password:formData["password"]
        };
        axios.post('http://localhost:8081/api/login',longedUser)
            .then((res)=>{
                if(res.data.email){
                    save("connectedUser",res.data);
                    const user = get("connectedUser");
                    redirectTo(user.userRole.userRole);
                    refreshP();
                }else{
                    setError('bad credential');
                }

            })
            .catch((err)=>{console.log(err); setError('Not connection')});
    }
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
        if(error){
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
                            <Form.Label>Email address</Form.Label>
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
                        {
                            error&&
                            <p className={"text-danger text-center"}>{error}</p>
                        }
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