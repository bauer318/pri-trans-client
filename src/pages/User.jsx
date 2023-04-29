import React from 'react';
import UsersHeader from "../components/UsersHeader";
import UserInfo from "../components/UserInfo";

const User = () => {
    return (
        <div className={"container"}>
            <UsersHeader/>
            <div className={"row mt-5"}>
                <UserInfo/>
            </div>
        </div>
    );
};
export default User;