import React from 'react';
import {RiLogoutCircleRLine} from "react-icons/ri";
import {remove} from "../services/LocalStorageService";
import {useNavigate} from "react-router-dom";

const LogoutBtn = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        remove('longedUser');
        navigate('/');
    }
    return (
        <button className={"btn btn-danger"} onClick={handleLogout}>
            <span><i><RiLogoutCircleRLine/></i></span> Logout
        </button>
    );
};

export default LogoutBtn;