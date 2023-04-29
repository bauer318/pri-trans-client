import React from 'react';

const CountryCard = () => {
    return (
        <div className={"col"}>
            <div className={"card mb-3 card-element"}>
                <div className={"card-header"}>
                    RD Congo
                </div>
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