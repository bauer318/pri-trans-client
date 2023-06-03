import React from 'react';
import {useMatch} from 'react-router-dom';
import {useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";

const UserInfo = () => {
    const match = useMatch("admin/users/:id");
    const userId = Number(match.params?.id);
    const user = useSelector(state => state.users.find(user => user.userId === userId));
    const roleStr = (role) => {
        switch (role) {
            case 1:
                return "Administrator";
            case 2:
                return "Moderator";
            case 3:
                return "Agent";
            case 4:
                return "Client";
            default:
                return "Unknown role";
        }
    }
    return (
        <>{user ?
            (<div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <h3>{user.infos.firstName}</h3>
                        <h3>{user.infos.lastName}</h3>
                        <h3>{user.infos.middleName}</h3>
                    </div>
                    <div className={"col-4"}>
                        <h3>{user.infos.phone}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.infos.address}</h3>
                    </div>
                    <div className={"col-4"}>
                        <h3>{roleStr(user.role)}</h3>
                        <h3>{user.infos.nationality}</h3>
                        <h3>{user.infos.birthdate}</h3>
                    </div>
                </div>
            </div>) : (<LoadingEffect/>)}
        </>
    );
};

export default UserInfo;