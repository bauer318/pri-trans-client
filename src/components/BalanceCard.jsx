import React from 'react';
import {NavLink} from "react-router-dom";

const BalanceCard = ({account}) => {
    return (
        <div className={"col"}>
            <NavLink style={{textDecoration: 'none'}} to={`/client/account/item`} state={{selectedAccount:account}}>
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