import React, {useState} from 'react';
import {
    FaBars, FaCity, FaCommentAlt, FaExchangeAlt, FaList, FaRegChartBar, FaShoppingBag,
    FaTh, FaUserAlt, FaUsers,
} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import { HiUsers} from "react-icons/hi";
import {GrCurrency} from "react-icons/gr";


const Sidebar = ({children}) => {
    //data
    const [isOpen, setIsOpen] = useState(true);
    const menuItem = [
        {
            path: "/",
            name: "Users",
            icon: <HiUsers/>
        },
        {
            path: "/countries",
            name: "Countries",
            icon: <FaCity/>
        },
        {
            path: "/currencies",
            name: "Currencies",
            icon: <GrCurrency/>
        },
        {
            path: "/payment-methods",
            name: "Payment methods",
            icon: <FaExchangeAlt/>
        },
    ]
    return (
            <div className="container-sidebar">
                <div className="sidebar" style={{width: isOpen ? "300px" : "50px"}}>
                    <div className="top_section">
                        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin</h1>
                        <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                            <FaBars onClick={() => setIsOpen(!isOpen)}/>
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text" style={{display: isOpen ? "" : "none"}}>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
    );
};

export default Sidebar;