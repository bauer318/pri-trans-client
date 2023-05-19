import React from 'react';
import {NavLink} from "react-router-dom";
import {get} from "../services/LocalStorageService";

const BalanceCard = () => {
    const longedUser = get('longedUser');
    return (
        <div className={"col"}>
            <NavLink style={{textDecoration: 'none'}} to={`/${longedUser?.predPath}/account/1`}>
                <div className={"card mb-3 card-element"}>
                    <div className={"card-header"}>
                        <h3>Balance $</h3>
                    </div>
                    <div className={"card-body"}>
                        <div>
                            <h3>82.82</h3>
                        </div>
                        <div>
                            <i>US Dollar</i>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default BalanceCard;