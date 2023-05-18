import React, {useState} from 'react';
import {
    FaBars, FaExchangeAlt, FaHistory, FaUsers
} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import {HiHome} from "react-icons/hi";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";
import {RiLuggageDepositLine} from "react-icons/ri";
import {BiMoneyWithdraw} from "react-icons/bi";


const Sidebar = ({children, user}) => {
    const [isOpen, setIsOpen] = useState(true);
    const menuItem = [
        {
            path: "/moderator/users",
            name: "Users",
            icon: <FaUsers/>
        },
        {
            path: "/agent/account",
            name: "Account",
            icon: <MdOutlineAccountBalanceWallet/>
        },
        {
            path: "/agent/deposits",
            name: "Deposits",
            icon: <RiLuggageDepositLine/>,
        },
        {
            path: "/agent/withdrawals",
            name: "Withdrawals",
            icon: <BiMoneyWithdraw/>,
        },
        {
            path: "/agent/history",
            name: "History",
            icon: <FaHistory/>
        },
        {
            path: "/agent/payment-methods",
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