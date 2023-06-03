import React, {useState} from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import {BsInfoCircleFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import UpdateUserModal from "../modals/UpdateUserModal";
import {useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";

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
        <>{users ?
            (<div>
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
                        <tr key={user.userId}>
                            <td>{user.email}</td>
                            <td className={"text-center"} style={{color: user.authStatus ? "green" : "red"}}>
                                {user.authStatus ? "Online" : "offline"}</td>
                            <td className={"text-center"} onClick={() => handleEdit(user.userId)}><FaEdit/></td>
                            <td className={"text-center"} onClick={() => handleDelete(user.userId)}><MdDeleteForever/></td>
                            <td className={"text-center"}>
                                {<NavLink to={`/admin/users/${user.userId}`}>
                                    <BsInfoCircleFill/>
                                </NavLink>}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                {showModal &&
                    <UpdateUserModal handleModal={handleModal} showModal={showModal} userId={userId} isDelete={isDelete}/>}
            </div>) : (<LoadingEffect/>)}
        </>
    );
};

export default UsersTable;