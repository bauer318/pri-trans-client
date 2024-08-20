import React from 'react';

const BoldTextComponent = ({text}) => {
    return (
        <span className={"fw-bold"}>
            { text }
        </span>
    );
};

export default BoldTextComponent;