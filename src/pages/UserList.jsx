import React, {useEffect} from 'react';
import UsersHeader from "../components/UsersHeader";
import UsersTable from "../components/UsersTable";
import {useDispatch} from "react-redux";
import {initializeUsers} from "../reducers/userReducers";


const UserList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeUsers());
    }, []);
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