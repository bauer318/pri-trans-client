import React from 'react';
import {NavLink} from "react-router-dom";

const BalanceCard = () => {
    return (
        <div className={"col"}>
            <NavLink style={{textDecoration: 'none'}} to={"/client/home"}>
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