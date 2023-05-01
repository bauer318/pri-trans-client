import React from 'react';
import currencyService from '../services/Currencies';
import {createSlice} from "@reduxjs/toolkit";
;


const currencySlice = createSlice({
    name:'currency',
    initialState:[],
    reducers:{
        setCurrencies(state, action){
            return action.payload;
        }
    }
})

export const initializeCurrencie = ()=>{
    return async dispatch =>{
        const currencies = await currencyService.getAll();
        dispatch(setCurrencies(currencies));
    }
}
export const {setCurrencies} = currencySlice.actions;

export default currencySlice.reducer;