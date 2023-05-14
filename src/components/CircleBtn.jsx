import React from 'react';

const CircleBtn = ({onClick, icon, content}) => {
    return (
        <div className={"col-lg-2"}>
            <div className={"d-flex justify-content-center"}>
                <button className={"center bg-primary"} onClick={onClick}><span><i>{icon}</i></span></button>
            </div>
            <div className={"d-flex justify-content-center mt-2"}>
                <h5>{content}</h5>
            </div>
        </div>
    );
};

export default CircleBtn;