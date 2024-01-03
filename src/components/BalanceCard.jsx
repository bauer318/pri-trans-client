import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {getItem} from "../services/LocalStorageService";

const BalanceCard = ({account}) => {
    const [toLink, setToLink] = useState("");
    useEffect(() => {
        const connectedUser = getItem("connectedUser");
        if (connectedUser?.userRole?.userRole === "ROLE_AGENT") {
            setToLink("/agent/account");
        } else if (connectedUser?.userRole?.userRole === "ROLE_CLIENT") {
            setToLink("/client/account/item")
        }
    }, []);
    return (
        <div className={"col"}>
            <NavLink style={{textDecoration: 'none'}} to={toLink} state={{selectedAccount: account}}>
                <div className={"card mb-3 card-element"}>
                    <div className={"card-header"}>
                        <h3>Balance {account?.currency?.code}</h3>
                    </div>
                    <div className={"card-body"}>
                        <div>
                            <h3>{account?.balance} {account?.currency?.symbol}</h3>
                        </div>
                        <div>
                            <i>{account?.currency?.currency}</i>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default BalanceCard;