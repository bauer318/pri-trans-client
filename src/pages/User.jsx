import React, {useEffect} from 'react';
import UserInfo from "../components/UserInfo";
import UserItemHeader from "../components/UserItemHeader";
import {useDispatch} from "react-redux";
import {initializeUsers} from "../reducers/userReducers";

const User = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeUsers());
    }, []);
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