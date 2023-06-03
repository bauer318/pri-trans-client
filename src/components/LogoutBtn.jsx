import React from 'react';
import {RiLogoutCircleRLine} from "react-icons/ri";
import {remove} from "../services/LocalStorageService";
import {useNavigate} from "react-router-dom";
import {logout, refreshP} from "../App";


const LogoutBtn = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        remove('connectedUser');
        navigate('/');
        logout();
        refreshP();
    }
    return (
        <button className={"btn btn-danger"} onClick={handleLogout}>
            <span><i><RiLogoutCircleRLine/></i></span> Logout
        </button>
    );
};

export default LogoutBtn;