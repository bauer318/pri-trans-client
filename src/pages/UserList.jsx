import React from 'react';
import {RiLogoutCircleRLine} from "react-icons/ri";
import {ImUserPlus} from "react-icons/im";
import LogoutBtn from "../components/LogoutBtn";
import UsersHeader from "../components/UsersHeader";


const UserList = () => {
    return (
        <div className="container">
            <UsersHeader/>
            <div className={"row"}>
                <h1>second row</h1>
            </div>
        </div>
);
};

export default UserList;