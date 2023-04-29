import React from 'react';
import UsersHeader from "../components/UsersHeader";
import UsersTable from "../components/UsersTable";


const UserList = () => {
    return (
        <div className="container">
            <UsersHeader/>
            <div className={"row mt-2"}>
                <UsersTable/>
            </div>
        </div>
);
};

export default UserList;