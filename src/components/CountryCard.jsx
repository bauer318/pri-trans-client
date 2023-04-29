import React from 'react';
import {NavLink} from "react-router-dom";

const CountryCard = () => {
    return (
        <div className={"col"}>
            <div className={"card mb-3 card-element"}>
                {
                    <NavLink to={"/countries/1"}>
                        <div className={"card-header"}>
                            RD Congo
                        </div>
                    </NavLink>
                }
                <div className={"card-body row"}>
                    <div className={"col"}>
                        <p>Currency 1</p>
                        <p>Currency 1</p>
                        <p>Currency 1</p>
                    </div>
                    <div className={"col"}>
                        <p>Payment method 1</p>
                        <p>Payment method 1</p>
                        <p>Payment method 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;