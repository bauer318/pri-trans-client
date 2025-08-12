import React from 'react';
import {FaCity, FaExchangeAlt, FaHistory, FaHome, FaTelegram, FaUsers} from 'react-icons/fa';
import {NavLink, useNavigate} from "react-router-dom";
import {HiHome, HiUsers} from "react-icons/hi";
import {MdOutlineAccountBalanceWallet, MdOutlineEmail, MdOutlinePermIdentity} from "react-icons/md";
import {RiLuggageDepositLine} from "react-icons/ri";
import {BiMoneyWithdraw} from "react-icons/bi";
import {GrCurrency} from "react-icons/gr";
import {BsFillWalletFill} from "react-icons/bs";
import LogoutBtn from "./LogoutBtn";
import {FiSettings} from "react-icons/fi";
import {TbManualGearbox} from "react-icons/tb";
import {IoMdNotifications} from "react-icons/io";
import { GoLaw } from "react-icons/go";


const Sidebar = ({children, user}) => {
    const navigate = useNavigate();
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
            {
                path: "/notifications",
                name: "Notifications",
                icon: <IoMdNotifications/>
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
                name: "Comptes",
                icon: <MdOutlineAccountBalanceWallet/>
            },
            {
                path: "/agent/deposits",
                name: "Depots",
                icon: <RiLuggageDepositLine/>
            },
            {
                path: "/agent/withdrawals",
                name: "Retraits",
                icon: <BiMoneyWithdraw/>
            },
            {
                path: "/agent/history",
                name: "Historique",
                icon: <FaHistory/>
            },
            {
                path: "/agent/payment-methods",
                name: "Methode de paiement",
                icon: <FaExchangeAlt/>
            },
            {
                path: "/agent/profile",
                name: "Profile",
                icon: <MdOutlinePermIdentity/>
            },
            {
                path: "/notifications",
                name: "Notifications",
                icon: <IoMdNotifications/>
            },
        ],
        [
            {
                path: "/client/home",
                name: "Transferts automatiques",
                icon: <HiHome/>
            },
            {
                path: "/client/manual-transfer",
                name: "Transferts manuels",
                icon: <TbManualGearbox/>
            },
            {
                path: "/client/account",
                name: "Comptes",
                icon: <MdOutlineAccountBalanceWallet/>
            },
            {
                path: "/client/history",
                name: "Historiques",
                icon: <FaHistory/>
            },
            {
                path: "/client/wallet",
                name: "Portefeuilles",
                icon: <BsFillWalletFill/>
            },
            {
                path: "/client/profile",
                name: "Profile",
                icon: <MdOutlinePermIdentity/>
            },
            {
                path: "/notifications",
                name: "Notifications",
                icon: <IoMdNotifications/>
            },
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
        <>
            <div className="container-sidebar">
                <div className="sidebar min-vh-100">
                    {!user ? (<NavLink to={"/"} className="link nav-item fs-4 top_section">
                        <div className="icon"><FaHome/></div>
                        <div className="link_text ms-2 d-none d-sm-inline">{'Acceuille'}</div>
                    </NavLink>) : <div>

                    </div>}
                    {user ?
                        (
                            menuItem[menuIndex]?.map((item, index) => (
                                    <NavLink to={item.path} key={index} className="link nav-item fs-4"
                                             activeclassname="active">
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
                        <div className="link_text ms-2 d-none d-sm-inline">{"Vos avis et critiques"}</div>
                    </NavLink>
                    <hr/>
                    <NavLink to={"mailto:bauerpictu@gmail.com"}
                             className="link nav-item fs-1" activeclassname="active">
                        <div className="icon"><MdOutlineEmail /></div>
                        <div className="link_text ms-2 d-none d-sm-inline">{"Email"}</div>
                    </NavLink>
                    <NavLink to={"https://t.me/bjack318"} target={"_blank"} rel={"noopener noreferrer"}
                             className="link nav-item fs-1" activeclassname="active">
                        <div className="icon"><FaTelegram /></div>
                        <div className="link_text ms-2 d-none d-sm-inline">{"Telegram"}</div>
                    </NavLink>
                    <NavLink to={"/https://drive.google.com/file/d/1EyZtMD8pElrNaAjg_lH7Jf5wqvNiCz1t/view?usp=sharing"} target={"_blank"} rel={"noopener noreferrer"}
                             className="link nav-item fs-1" activeclassname="active">
                        <div className="icon"><GoLaw /></div>
                        <div className="link_text ms-2 d-none d-sm-inline">{"Termes et Conditions"}</div>
                    </NavLink>
                </div>
                <main>{children}</main>
            </div>
        </>
    );
};

export default Sidebar;