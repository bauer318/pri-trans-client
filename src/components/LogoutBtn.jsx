import React from 'react';
import {RiLogoutCircleRLine} from "react-icons/ri";

const LogoutBtn = () => {
    return (
        <button className={"btn btn-danger"}>
            <span><i><RiLogoutCircleRLine/></i></span> Logout
        </button>
    );
};

export default LogoutBtn;