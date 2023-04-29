import React from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import {BsInfoCircleFill} from "react-icons/bs";
import UserInfo from "./UserInfo";
import {NavLink} from "react-router-dom";

const UsersTable = () => {
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
                    <td className={"text-center"}><FaEdit/></td>
                    <td className={"text-center"}><MdDeleteForever/></td>
                    <td className={"text-center"}>
                        {<NavLink to={"/1"}>
                            <BsInfoCircleFill/>
                        </NavLink>}
                    </td>
                </tr>
                <tr>
                    <td>First user ful name</td>
                    <td className={"text-center"}>Online</td>
                    <td className={"text-center"}><FaEdit/></td>
                    <td className={"text-center"}><MdDeleteForever/></td>
                    <td className={"text-center"}>
                        {<NavLink to={"/1"}>
                            <BsInfoCircleFill/>
                        </NavLink>}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;