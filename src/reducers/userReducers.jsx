import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import userService from '../services/UserService'


const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        setUsers(state, action) {
            return action.payload;
        },
        appendUser(state, action) {
            state.push(action.payload);
        }
    }
});

export const initializeUsers = () => {
    return async dispatch => {
        const users = await userService.getAll();
        dispatch(setUsers(users));
    }
};

export const createUser = user => {
    return async dispatch => {
        const newUser = await userService.createNew(user);
        dispatch(appendUser(newUser));
    }
}
export const updateUser = (id, user) => {
    return async dispatch => {
        await userService.update(id, user);
        const users = await userService.getAll();
        dispatch(setUsers(users));
    }
}

export const deleteUser = id => {
    return async dispatch => {
        await userService.deleteUser(id);
        const users = await userService.getAll();
        dispatch(setUsers(users));
    }
}

export const getUserByEmail = email =>{
    return async dispatch =>{
        const user = await userService.getUserByEmail(email);
        dispatch(setUsers(user));
    }
}
export const {setUsers, appendUser} = userSlice.actions;
export default userSlice.reducer;