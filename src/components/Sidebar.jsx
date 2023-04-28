import React, {useState} from 'react';
import {
    FaBars, FaCommentAlt, FaList, FaRegChartBar, FaShoppingBag,
    FaTh, FaUserAlt,
} from 'react-icons/fa';
import {NavLink} from "react-router-dom";

const Sidebar = ({children}) => {
    //data
    const [isOpen, setIsOpen] = useState(false);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh/>
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt/>
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar/>
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt/>
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag/>
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaList/>
        },
    ]
    return (
            <div className="container">
                <div className="sidebar" style={{width: isOpen ? "300px" : "50px"}}>
                    <div className="top_section">
                        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
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

                <main style={{background: "gray"}}>{children}</main>
            </div>
    );
};

export default Sidebar;