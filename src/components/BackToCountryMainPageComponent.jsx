import React from 'react';
import {useNavigate} from "react-router-dom";

const BackToCountryMainPageComponent = ({text}) => {
    return (
        <div className={"container"}>
            <h2 className={"text-danger"}>{text}</h2>
        </div>
    );
};

export default BackToCountryMainPageComponent;