import React from 'react';

//Convert Send and Withdraw CSW
const CSWHeader = ({title}) => {
    return (
        <div className={"row"}>
            <div className={"col-lg-6 d-flex justify-content-start"}>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default CSWHeader;