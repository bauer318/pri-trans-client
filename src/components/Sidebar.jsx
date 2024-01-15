import React, {useState} from 'react';
import {FaCity, FaExchangeAlt, FaHistory, FaUsers} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import {HiHome, HiUsers} from "react-icons/hi";
import {MdOutlineAccountBalanceWallet, MdOutlinePermIdentity} from "react-icons/md";
import {RiLuggageDepositLine} from "react-icons/ri";
import {BiMoneyWithdraw} from "react-icons/bi";
import {GrCurrency} from "react-icons/gr";
import {BsFillWalletFill} from "react-icons/bs";
import LogoutBtn from "./LogoutBtn";
import {FiSettings} from "react-icons/fi";


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
            default:
                return 4;
        }
    }
    const menuIndex = getMenuIndexByRole(user?.userRole?.userRole);
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
            {
                path: "/agent/profile",
                name: "Profile",
                icon: <MdOutlinePermIdentity/>
            }
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
                path: "/client/wallet",
                name: "Wallets",
                icon: <BsFillWalletFill/>
            },
            {
                path: "/client/profile",
                name: "Profile",
                icon: <MdOutlinePermIdentity/>
            }
        ],
        [
            {
                path: "/",
                name: "",
                icon: <FaUsers/>
            },
        ],

    ];
    const userLogo = ['Admin', 'Moder', 'Agent', 'Client']
    return (
        <div className="container-sidebar">
            <div className="sidebar min-vh-100">
                <div className="top_section">
                    <h1 className="logo d-none d-sm-inline">{user ? userLogo[menuIndex] : 'Home'}</h1>
                </div>
                {user ?
                    (
                        menuItem[menuIndex]?.map((item, index) => (
                                <NavLink to={item.path} key={index} className="link nav-item fs-4" activeclassname="active">
                                    <div className="icon">{item.icon}</div>
                                    <div className="link_text ms-2 d-none d-sm-inline">{item.name}</div>
                                </NavLink>
                            )
                        )
                    ) :
                    (
                        <div>

                        </div>
                    )
                }
                {
                    user &&
                    <div className={"col d-flex justify-content-center mt-5"}>
                        <LogoutBtn/>
                    </div>
                }
                <hr className={"mt-5"}/>
                <NavLink to={"https://forms.yandex.ru/u/65a25274d0468848f12a169b/"}
                         className="link nav-item fs-1" activeclassname="active">
                    <div className="icon"><FiSettings/></div>
                    <div className="link_text ms-2 d-none d-sm-inline">{"Something to fix"}</div>
                </NavLink>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;