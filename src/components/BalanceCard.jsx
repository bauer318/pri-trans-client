import React from 'react';
import {NavLink} from "react-router-dom";
import {get} from "../services/LocalStorageService";

const BalanceCard = ({currency, symbol, balance}) => {
    const longedUser = get('longedUser');
    return (
        <div className={"col"}>
            <NavLink style={{textDecoration: 'none'}} to={`/${longedUser?.predPath}/account/1`}>
                <div className={"card mb-3 card-element"}>
                    <div className={"card-header"}>
                        <h3>Balance {symbol}</h3>
                    </div>
                    <div className={"card-body"}>
                        <div>
                            <h3>{balance}</h3>
                        </div>
                        <div>
                            <i>{currency}</i>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default BalanceCard;