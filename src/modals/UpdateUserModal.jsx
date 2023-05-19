import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {ImUserPlus} from "react-icons/im";
import {useDispatch, useSelector} from "react-redux";
import LoadingEffect from "../components/LoadingEffect";
import {deleteUser, updateUser} from "../reducers/userReducers";
import {useNavigate} from "react-router-dom";
import {initializeCountries} from "../reducers/countryReducers";

const UpdateUserModal = ({showModal, handleModal, userId, isDelete}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const user = useSelector(state => state.users.find(user => user.id === userId));
    const [updateEmail, setUpdatedEmail] = useState(user?.email);
    const [updatedRole, setUpdatedRole] = useState(user?.role);
    const [updatedCountry, setUpdatedCountry] = useState(user?.country);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeCountries());
    }, []);
    const countries = useSelector(state => state.countries);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isDelete) {
            dispatch(deleteUser(userId));
        } else {
            const changedUser = {
                ...user,
                email: updateEmail,
                role: updatedRole,
                country: updatedCountry
            }
            dispatch(updateUser(userId, changedUser));
        }
        handleModal();
    };
    const handleEmailChange = (event) => {
        const email = event.target.value;
        setUpdatedEmail(email);
    };
    const handleRoleChange = (event) => {
        const role = event.target.value;
        setUpdatedRole(role);
    };
    const handleCountryChange = (event) => {
        const country = event.target.value;
        setUpdatedCountry(country);
    };
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title>{isDelete ? "Delete user" : "Edit user"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="example@email.com"
                            name="email"
                            defaultValue={user?.email}
                            required={true}
                            onChange={handleEmailChange}
                            readOnly={isDelete}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicUserRole">
                        <Form.Label>User role</Form.Label>
                        <Form.Control as="select"
                                      name="role"
                                      required={true}
                                      onChange={handleRoleChange}
                                      defaultValue={user?.role}
                                      disabled={isDelete}
                        >
                            <option value={3}>Agent</option>
                            <option value={2}>Moderator</option>
                            <option value={1}>Administrator</option>
                        </Form.Control>
                    </Form.Group>
                    {
                        isDelete ? (<Form.Group controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                as="select"
                                name="country"
                            >
                                <option value={Number(updatedCountry)}>{countries?.find(c=>c.id===Number(updatedCountry))?.country}</option>
                            </Form.Control>
                        </Form.Group>) : (<Form.Group controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                as="select"
                                name="country"
                                required={true}
                                onChange={handleCountryChange}
                            >
                                <option value={Number(updatedCountry)}>{countries?.find(c=>c.id===Number(updatedCountry))?.country}</option>
                                {
                                    countries?.map(country =>
                                        <option value={country.id} key={country.id}>{country.country}</option>
                                    )
                               }
                            </Form.Control>
                        </Form.Group>)
                    }


                    <div className={"mt-2"}>
                        <button className={isDelete ? "btn btn-danger" : "btn btn-primary"} type={"submit"}>
                            <span className={"me-2"}><i><ImUserPlus/></i></span>{isDelete ? "Delete" : "Save"}
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

export default UpdateUserModal;