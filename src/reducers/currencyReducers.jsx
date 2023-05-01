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
        },
        appendCurrency(state,action){
            state.push(action.payload);
        }
    }
})

export const createCurrency = currency =>{
    return async dispatch=>{
        const newCurrency = await currencyService.createNew(currency);
        dispatch(appendCurrency(newCurrency));
    }
}
export const initializeCurrencies = ()=>{
    return async dispatch =>{
        const currencies = await currencyService.getAll();
        dispatch(setCurrencies(currencies));
    }
}
export const {setCurrencies,appendCurrency} = currencySlice.actions;

export default currencySlice.reducer;