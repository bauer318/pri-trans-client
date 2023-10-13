import React, {useEffect, useState} from 'react';
import {useMatch} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import LoadingEffect from "./LoadingEffect";
import {initializePersonalInfo} from "../reducers/PersonalInfoReducers";

const UserInfo = () => {
    const match = useMatch("admin/users/:id");
    const [canWait, setCanWait] = useState(false);
    const userId = Number(match.params?.id);
    const dispatch = useDispatch();
    useEffect(() => {
        setCanWait(true);
        dispatch(initializePersonalInfo(userId))
        setCanWait(false);
    }, []);
    const personalInfo = useSelector(state => state.personalInfo);
    const user = useSelector(state => state.users.find(user => user.userId === userId));
    console.log(personalInfo);
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
        <>{personalInfo.length > 0 && !canWait ?
            (<div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <h3>{personalInfo?.firstname}</h3>
                        <h3>{personalInfo?.lastName}</h3>
                        <h3>{personalInfo?.middleName}</h3>
                    </div>
                    <div className={"col-4"}>
                        <h3>{personalInfo?.phone}</h3>
                        <h3>{user?.email}</h3>
                        <h3>{personalInfo?.address}</h3>
                    </div>
                    <div className={"col-4"}>
                        <h3>{roleStr(user?.userRole.id)}</h3>
                        <h3>{personalInfo?.nationality}</h3>
                        <h3>{personalInfo?.birthdate}</h3>
                    </div>
                </div>
            </div>) : !canWait ? <div> Not personal info for this user </div>:(<LoadingEffect/>)}
        </>
    );
};

export default UserInfo;