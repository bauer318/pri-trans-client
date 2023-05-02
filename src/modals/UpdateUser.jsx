import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import {ImUserPlus} from "react-icons/im";
import {useSelector} from "react-redux";
import LoadingEffect from "../components/LoadingEffect";

const UpdateUser = ({showModal, handleModal, userId, isDelete}) => {
    const [formData, setFormData] = useState({});
    const user = useSelector(state => state.users.find(user => user.id === userId));
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your code to post the form data to your backend
        console.log(formData);
        handleModal();
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };
    return (
        <>{user ?
            (<Modal show={showModal} onHide={handleModal}>
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
                                defaultValue={user.email}
                                required={true}
                                onChange={handleChange}
                                readOnly={isDelete}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicUserRole">
                            <Form.Label>User role</Form.Label>
                            <Form.Control as="select"
                                          name="role"
                                          required={true}
                                          onChange={handleChange}
                                          defaultValue={user.role}
                                          disabled={isDelete}
                            >
                                <option value={3}>Agent</option>
                                <option value={2}>Moderator</option>
                                <option value={1}>Administrator</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter user country"
                                name="country"
                                value={user.country}
                                required={true}
                                onChange={handleChange}
                                readOnly={isDelete}
                            />
                        </Form.Group>

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
            </Modal>) : (<LoadingEffect/>)}
        </>
    );
};

export default UpdateUser;