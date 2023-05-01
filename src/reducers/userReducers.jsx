import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import userService from '../services/Users'


const userSlice = createSlice({
   name:'user',
   initialState:[],
   reducers:{
       setUsers(state, action){
           return action.payload;
       },
       appendUser(state,action){
           state.push(action.payload);
       }
   }
});

export const initializeUsers = () =>{
    return async dispatch => {
        const users = await userService.getAll();
        dispatch(setUsers(users));
    }
};

export const createUser = user =>{
    return async dispatch => {
        const newUser = await userService.createNew(user);
        dispatch(appendUser(newUser));
    }
}

export const {setUsers,appendUser} = userSlice.actions;
export default userSlice.reducer;