import React, {useState} from 'react';
import {ImUserPlus} from "react-icons/im";
import LogoutBtn from "./LogoutBtn";
import AddUserModal from "../modals/AddUserModal";

const UsersHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [role, setRole] = useState(1);
    const [isOnline, setIsOnline] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    };
    const handleRoleSelectChange = (event) => {
        const role = event.target.value;
        setRole(role);
    }
    const handleAuthStatusSelectChange = (event) => {
        const authStatus = event.target.value;
        setIsOnline(authStatus === 2);
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