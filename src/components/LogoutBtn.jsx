import React from 'react';
import {RiLogoutCircleRLine} from "react-icons/ri";
import {getItem, removeItem} from "../services/LocalStorageService";
import {useNavigate} from "react-router-dom";
import {logout, refreshP} from "../App";
import {logoutUser} from "../services/LogoutService";
import {printError} from "../services/Utils";


const LogoutBtn = () => {
    const navigate = useNavigate();
    const callBackRemoveData = () => {
        removeItem('connectedUser');
        removeItem('jwtToken');
        navigate('/');
        logout();
        refreshP();
    }
    const logoutUserG = (callBackRemoveData) => {
        const b = logoutUser(getItem('connectedUser')?.userId);
        b.then(response => {
            callBackRemoveData();
            console.log(response);
        }).catch(error => {
            printError(error);
        });
        removeItem('connectedUser');
        removeItem('jwtToken');
    }
    const handleLogout = () => {
        logoutUserG(callBackRemoveData);
    }

    return (
        <button className={"btn btn-danger"} onClick={handleLogout}>
            <span><i><RiLogoutCircleRLine/></i></span> Logout
        </button>
    );
};

export default LogoutBtn;