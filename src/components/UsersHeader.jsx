import React, {useState} from 'react';
import {ImUserPlus} from "react-icons/im";
import LogoutBtn from "./LogoutBtn";
import AddUserModal from "../modals/AddUserModal";
import {useDispatch} from "react-redux";
import {getByAuthStatus, getByRoleAndAuthStatus, initializeUsers, getByRole} from "../reducers/userReducers";
import {getUserSortRq} from "../services/Utils";

const UsersHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [role, setRole] = useState(1);
    const [isOnline, setIsOnline] = useState(false);
    const [authStatus, setAuthStatus] = useState(1);
    const dispatch = useDispatch();
    const handleModal = () => {
        setShowModal(!showModal);
    };
    const handleRoleSelectChange = (event) => {
        const role = Number (event.target.value);
        sortUser(role, isOnline);
        setRole(role);
    }

    const sortUser = (role,isOnline)=>{
        if(role===1){
            if(authStatus===1){
                dispatch(initializeUsers());
            }else{
                dispatch(getByAuthStatus(isOnline));
            }
        }else{
            if(authStatus===1){
                const roleRq = getUserSortRq(role,isOnline);
                dispatch(getByRole(roleRq));
            }else{
                const roleAuthReq = getUserSortRq(role,isOnline);
                dispatch(getByRoleAndAuthStatus(roleAuthReq));
            }
        }
    }
    const handleAuthStatusSelectChange = (event) => {
        const authStatus = Number (event.target.value);
        setAuthStatus(authStatus);
        const isOnlineC = authStatus===2;
        sortUser(role, isOnlineC);
        setIsOnline(isOnlineC);
    }
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 col-3"}>
                    <select className={"form-select"} aria-label={"Default select example"} name={"role"}
                            onChange={handleRoleSelectChange}>
                        <option value={1}>All</option>
                        <option value={2}>Administrators</option>
                        <option value={3}>Moderators</option>
                        <option value={4}>Agents</option>
                        <option value={5}>Clients</option>
                    </select>
                </div>
                <div className={"col-lg-3 col-3"}>
                    <select className={"form-select"} aria-label={"Default select example"}
                            onChange={handleAuthStatusSelectChange}>
                        <option value={1}>All</option>
                        <option value={2}>Online</option>
                        <option value={3}>Offline</option>
                    </select>
                </div>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <button className={"btn btn-primary"} onClick={handleModal}>
                        <span><i><ImUserPlus/></i></span> Add user
                    </button>
                </div>
                <div className={"col-lg-3 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
            {showModal &&
                <AddUserModal handleModal={handleModal} showModal={showModal}/>}
        </div>
    );
};
export default UsersHeader;