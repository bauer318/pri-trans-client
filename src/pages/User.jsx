import React from 'react';
import UserInfo from "../components/UserInfo";
import UserItemHeader from "../components/UserItemHeader";

const User = () => {
    return (
        <div className={"container"}>
            <UserItemHeader/>
            <div className={"row mt-5"}>
                <UserInfo/>
            </div>
        </div>
    );
};
export default User;