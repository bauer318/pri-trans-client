import React from 'react';

const UserInfo = () => {
    return (
        <div>
            <div className={"row"}>
                <div className={"col-4"}>
                    <h1>First name</h1>
                    <h1>Last name</h1>
                    <h1>Middle name</h1>
                </div>
                <div className={"col-4"}>
                    <h1>Role</h1>
                    <h1>Phone</h1>
                    <h1>Email</h1>
                </div>
                <div className={"col-4"}>
                    <h1>Nationality</h1>
                    <h1>Address</h1>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;