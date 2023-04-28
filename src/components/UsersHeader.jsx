import React from 'react';
import {ImUserPlus} from "react-icons/im";
import LogoutBtn from "./LogoutBtn";

const UsersHeader = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"col-lg-3 col-3"}>
                    <select className={"form-select"} aria-label={"Default select example"}>
                        <option value={1}>All</option>
                        <option value={2}>Administrators</option>
                        <option value={3}>Moderators</option>
                        <option value={4}>Agents</option>
                        <option value={5}>Clients</option>
                    </select>
                </div>
                <div className={"col-lg-3 col-3"}>
                    <select className={"form-select"} aria-label={"Default select example"}>
                        <option value={1}>Online & Offline</option>
                        <option value={2}>Online</option>
                        <option value={3}>Offline</option>
                    </select>
                </div>
                <div className={"col-lg-3 d-flex justify-content-center"}>
                    <button className={"btn btn-primary"}>
                        <span><i><ImUserPlus/></i></span> Add user
                    </button>
                </div>
                <div className={"col-lg-3 d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default UsersHeader;