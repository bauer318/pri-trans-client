import React, {useState} from 'react';
import {
    FaBars, FaCity, FaExchangeAlt, FaHistory, FaUsers
} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import {HiHome, HiUsers} from "react-icons/hi";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";
import {RiLuggageDepositLine} from "react-icons/ri";
import {BiMoneyWithdraw} from "react-icons/bi";
import Home from "../pages/Home";
import {GrCurrency} from "react-icons/gr";


const Sidebar = ({children, user}) => {
    const [isOpen, setIsOpen] = useState(true);
    const getMenuIndexByRole = userRole => {
        switch (userRole) {
            case 'ROLE_ADMIN':
                return 0;
            case 'ROLE_MODERATOR':
                return 1;
            case 'ROLE_AGENT':
                return 2;
            case 'ROLE_CLIENT':
                return 3;
        }
    }
    const menuIndex = getMenuIndexByRole(user?.userRole.userRole);
    const menuItem = [
        [
            {
                path: "admin/users",
                name: "Users",
                icon: <HiUsers/>
            },
            {
                path: "admin/countries",
                name: "Countries",
                icon: <FaCity/>
            },
            {
                path: "admin/currencies",
                name: "Currencies",
                icon: <GrCurrency/>
            },
            {
                path: "admin/payment-methods",
                name: "Payment methods",
                icon: <FaExchangeAlt/>
            },
        ],
        [
            {
                path: "/moderator/users",
                name: "Users",
                icon: <FaUsers/>
            },
        ],
        [
            {
                path: "/agent/account",
                name: "Account",
                icon: <MdOutlineAccountBalanceWallet/>
            },
            {
                path: "/agent/deposits",
                name: "Deposits",
                icon: <RiLuggageDepositLine/>
            },
            {
                path: "/agent/withdrawals",
                name: "Withdrawals",
                icon: <BiMoneyWithdraw/>
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
        ],
        [
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

    ];
    const userLogo = ['Admin', 'Moder', 'Agent', 'Client']
    return (
        <div className="container-sidebar">
            <div className="sidebar" style={{width: isOpen ? "300px" : "50px"}}>
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{user? userLogo[menuIndex]:'Home'}</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={() => setIsOpen(!isOpen)}/>
                    </div>
                </div>
                {user ? (
                    menuItem[menuIndex]?.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{display: isOpen ? "" : "none"}}>{item.name}</div>
                        </NavLink>
                    ))) : (
                    <div>

                    </div>
                )
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;