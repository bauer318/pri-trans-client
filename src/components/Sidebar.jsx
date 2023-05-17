import React, {useState} from 'react';
import {
    FaBars, FaExchangeAlt,FaHistory
} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import {HiHome} from "react-icons/hi";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";


const Sidebar = ({children, user}) => {
    const [isOpen, setIsOpen] = useState(true);
    const menuItem = [
        {
            path: "/client/home",
            name: "Home",
            icon: <HiHome/>
        },
        {
            path: "/client/account",
            name: "Account",
            icon: <MdOutlineAccountBalanceWallet/>
        },
        {
            path: "/client/history",
            name: "History",
            icon: <FaHistory/>
        },
        {
            path: "/client/payment-methods",
            name: "Payment methods",
            icon: <FaExchangeAlt/>
        },
    ]
    return (
            <div className="container-sidebar">
                <div className="sidebar" style={{width: isOpen ? "300px" : "50px"}}>
                    <div className="top_section">
                        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Client</h1>
                        <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                            <FaBars onClick={() => setIsOpen(!isOpen)}/>
                        </div>
                    </div>
                    { user? (
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text" style={{display: isOpen ? "" : "none"}}>{item.name}</div>
                            </NavLink>
                        ))):(
                        <div></div>
                    )
                    }
                </div>
                <main>{children}</main>
            </div>
    );
};

export default Sidebar;