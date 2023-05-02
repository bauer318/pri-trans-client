import React from 'react';
import LogoutBtn from "./LogoutBtn";


const UserItemHeader = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"d-flex justify-content-end"}>
                    <LogoutBtn/>
                </div>
            </div>
        </div>
    );
};

export default UserItemHeader;