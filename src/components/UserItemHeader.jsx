import React, {useState} from 'react';
import {ImUserPlus} from "react-icons/im";
import LogoutBtn from "./LogoutBtn";
import AddUserModal from "../modals/AddUserModal";

const UserItemHeader = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default UserItemHeader;