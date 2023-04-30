import React, {useState} from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import {BsInfoCircleFill} from "react-icons/bs";
import UserInfo from "./UserInfo";
import {NavLink} from "react-router-dom";
import UpdateUser from "../modals/UpdateUser";

const UsersTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
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
                    <th scope={"col"} className={"text-center"}>Ful name</th>
                    <th scope={"col"} className={"text-center"}>Authorization status</th>
                    <th scope={"col"} className={"text-center"} colSpan={2}>Action</th>
                    <th scope={"col"} className={"text-center"}>Details</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>First user ful name</td>
                    <td className={"text-center"}>Online</td>
                    <td className={"text-center"} onClick={() => handleEdit(1)}><FaEdit/></td>
                    <td className={"text-center"} onClick={() => handleDelete(1)}><MdDeleteForever/></td>
                    <td className={"text-center"}>
                        {<NavLink to={"/1"}>
                            <BsInfoCircleFill/>
                        </NavLink>}
                    </td>
                </tr>
                <tr>
                    <td>First user ful name</td>
                    <td className={"text-center"}>Online</td>
                    <td className={"text-center"} onClick={() => handleEdit(2)}><FaEdit/></td>
                    <td className={"text-center"} onClick={() => handleDelete(2)}><MdDeleteForever/></td>
                    <td className={"text-center"}>
                        {<NavLink to={"/1"}>
                            <BsInfoCircleFill/>
                        </NavLink>}
                    </td>
                </tr>
                </tbody>
            </table>
            <UpdateUser handleModal={handleModal} showModal={showModal} userId={userId} isDelete={isDelete}/>
        </div>
    );
};

export default UsersTable;