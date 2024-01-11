import React from 'react';
import {FaUsers} from "react-icons/fa";

function NewSidebar() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column"}>
                    <div>
                        <a className={"text-decoration-none d-none d-sm-inline text-white d-flex align-items-center ms-3 mt-2"}>
                            <span className={"ms-1 fs-4 d-none d-sm-inline"}>Brand</span>
                        </a>
                        <hr className={"text-white d-none d-sm-block"}/>
                        <ul className={"nav nav-pills flex-column"}>
                            <li className={"nav-item text-white fs-4 my-1 py-2 py-sm-0"}>
                                <a href="#" className={"nav-link text-white fs-5"} aria-current={"page"}>
                                    <i className={"fs-4"}><FaUsers/></i>
                                    <span className={"ms-2 d-none d-sm-inline"}>Dashboard</span>
                                </a>
                            </li>
                            <li className={"nav-item text-white fs-4 my-1 py-2 py-sm-0"}>
                                <a href="#" className={"nav-link text-white fs-5"} aria-current={"page"}>
                                    <i className={"fs-4"}><FaUsers/></i>
                                    <span className={"ms-2 d-none d-sm-inline"}>Others</span>
                                </a>
                            </li>
                            <li className={"nav-item text-white fs-4 my-1 py-2 py-sm-0"}>
                                <a href="#" className={"nav-link text-white fs-5"} aria-current={"page"}>
                                    <i className={"fs-4"}><FaUsers/></i>
                                    <span className={"ms-2 d-none d-sm-inline"}>Go</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className={"dropdown open"}>
                        <a href="#" className={"text-decoration-none p-3 btn btn-secondary text-white dropdown-toggle"}
                           id={"triggerId"}
                           type={"button"}
                           data-bs-toggle='dropdown' aria-expanded={'false'}>
                            <i><FaUsers/></i>
                            <span className={"ms-2 d-none d-sm-inline"}>Bauer</span>
                        </a>
                        <div className={"dropdown-menu"} aria-labelledby={"triggerId"}>
                            <a href="#" className={"dropdown-item"}>Action</a>
                            <a href="#" className={"dropdown-item disabled"}>Disabled action</a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default NewSidebar;