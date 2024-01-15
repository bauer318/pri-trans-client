import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {ImUserPlus} from "react-icons/im";
import {useDispatch, useSelector} from "react-redux";
import {initializeCountries} from "../reducers/countryReducers";
import {getOne} from "../services/RoleService";
import {getById} from "../services/CountryService";
import {initializeUsers} from "../reducers/userReducers";
import userService from '../services/UserService'

const AddUserModal = ({showModal, handleModal}) => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }
    useEffect(() => {
        setCanWait(true);
        dispatch(initializeCountries(callBack));

    }, []);
    const countries = useSelector(state => state.countries);
    const handleSubmit = (event) => {
        event.preventDefault();
        setCanWait(true);
        userService.createNew(formData, errorCallback, callBack)
            .then(r => setCanWait(false));
        dispatch(initializeUsers());
        handleModal();
    };
    const errorCallback = () => {
        alert("Failed");
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleRoleChange = (event) => {
        const {name, value} = event.target;
        const role = getOne(value);
        role.then(res => setFormData({...formData, [name]: res}));
    }

    const handleCountryChange = (event) => {
        const {name, value} = event.target;
        const country = getById(value);
        country.then(res => setFormData({...formData, [name]: res}));
    }
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="example@email.com"
                            name="email"
                            required={true}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicUserRole">
                        <Form.Label>User role</Form.Label>
                        <Form.Control as="select"
                                      name="userRole"
                                      required={true}
                                      onChange={handleRoleChange}
                        >
                            <option value="">Select user role</option>
                            <option value={3}>Agent</option>
                            <option value={2}>Moderator</option>
                            <option value={1}>Administrator</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            as="select"
                            name="country"
                            required={true}
                            onChange={handleCountryChange}
                        >
                            <option value="">Select user's country</option>
                            {
                                countries?.map(country =>
                                    <option value={country.countryId}
                                            key={country.countryId}>{country.countryName}</option>
                                )
                            }
                        </Form.Control>
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
                    <div className={"mt-2"}>
                        <button className={"btn btn-primary"} type={"submit"} disabled={canWait}><span
                            className={"me-2"}><i><ImUserPlus/></i></span>Add
                        </button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddUserModal;