import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import * as roleService from "../services/RoleService";


const roleSlice = createSlice({
    name: 'userRole',
    initialState: [],
    reducers: {
        setRole(state, action) {
            return action.payload;
        }
    }
});
export const getRoleById = (id) => {
    console.log('id ', id);
    return async dispatch => {
        const role = await roleService.getOne(id);
        console.log('role in ', role);
        dispatch(setRole(role));
    }
}

export const {setRole} = roleSlice.actions;

export default roleSlice.reducer;