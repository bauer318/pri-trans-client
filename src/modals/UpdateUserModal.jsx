import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {ImUserPlus} from "react-icons/im";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, updateUser} from "../reducers/userReducers";
import {useNavigate} from "react-router-dom";
import {initializeCountries} from "../reducers/countryReducers";
import {getByName} from "../services/CountryService";
import {getAll, getOne} from "../services/RoleService";


const UpdateUserModal = ({showModal, handleModal, userId, isDelete}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const user = useSelector(state => state.users.find(user => user.userId === userId));
    const [updateEmail, setUpdatedEmail] = useState(user?.email);
    const [updatedRole, setUpdatedRole] = useState(user?.userRole);
    const [updatedCountry, setUpdatedCountry] = useState(user?.country);
    const [roles, setRoles] = useState([]);
    const [canWait, setCanWait] = useState(false);
    const callBack = () => {
        setCanWait(false);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        setCanWait(true);
        dispatch(initializeCountries(callBack));
        getAll().then(response => setRoles(response));
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
                userRole: updatedRole,
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
        const role = getOne(event.target.value);
        role.then(response => setUpdatedRole(response));
    };
    const handleCountryChange = (event) => {
        const country = getByName(event.target.value);
        country.then(response => {
            setUpdatedCountry(response);
        });
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
                                      defaultValue={user?.userRole}
                                      disabled={isDelete}
                        >
                            <option>{updatedRole?.userRole.substring(5).toLowerCase()}</option>
                            {roles?.length > 0 && roles?.filter(role => role.id !== updatedRole.id && role.userRole !== 'ROLE_CLIENT')?.map(role =>
                                <option
                                    value={role.id} key={role.id}>{role.userRole.substring(5).toLowerCase()}</option>)}
                        </Form.Control>
                    </Form.Group>
                    {
                        isDelete ? (
                            <Form.Group controlId="formBasicCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="country"
                                >
                                    <option
                                        value={updatedCountry?.countryName} key={updatedCountry.countryId}>{countries?.find(c => c.countryId === Number(updatedCountry?.countryId))?.countryName}</option>
                                </Form.Control>
                            </Form.Group>) : (<Form.Group controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                as="select"
                                name="country"
                                required={true}
                                onChange={handleCountryChange}
                            >
                                <option
                                    value={updatedCountry?.countryName}>{countries?.find(c => c.countryId === updatedCountry?.countryId)?.countryName}</option>
                                {
                                    countries.filter(country => country.countryId !== updatedCountry.countryId).map(country =>
                                        <option value={country.countryName}
                                                key={country.countryId}>{country.countryName}</option>
                                    )
                                }
                            </Form.Control>
                        </Form.Group>)
                    }


                    <div className={"mt-2"}>
                        <button className={isDelete ? "btn btn-danger" : "btn btn-primary"} disabled={isDelete} type={"submit"}>
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