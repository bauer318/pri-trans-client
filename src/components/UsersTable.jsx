import React, {useEffect, useState} from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import {BsInfoCircleFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import UpdateUser from "../modals/UpdateUser";
import {useSelector} from "react-redux";

const UsersTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState(0);
    const [isDelete, setIsDelete] = useState(false);

    const users = useSelector(state => state.users);
    const handleModal = () => {
        setShowModal(!showModal);
    };

    const handleEdit = (userIdParam) => {
        handleHelp(userIdParam);
        setIsDelete(false);
    }

    const handleHelp = (userIdParam) => {
        handleModal();
        setUserId(userIdParam);
    }

    const handleDelete = (userIdParam) => {
        handleHelp(userIdParam);
        setIsDelete(true);
    }

    return (
        <div>
            <table className={"table table-success table-striped table-bordered table-responsive"}>
                <thead className={"table-light"}>
                <tr>
                    <th scope={"col"} className={"text-center"}>Email</th>
                    <th scope={"col"} className={"text-center"}>Authorization status</th>
                    <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                    <th scope={"col"} className={"text-center"}>Details</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <tr key={user.id}>
                        <td>{user.email}</td>
                        <td className={"text-center"} style={{color:user.authStatus ? "green":"red"}}>
                            {user.authStatus ? "Online":"offline"}</td>
                        <td className={"text-center"} onClick={() => handleEdit(user.id)}><FaEdit/></td>
                        <td className={"text-center"} onClick={() => handleDelete(user.id)}><MdDeleteForever/></td>
                        <td className={"text-center"}>
                            {<NavLink to={`/users/${user.id}`}>
                                <BsInfoCircleFill/>
                            </NavLink>}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            {userId!==0 && <UpdateUser handleModal={handleModal} showModal={showModal} userId={userId} isDelete={isDelete}/>}
        </div>
    );
};

export default UsersTable;