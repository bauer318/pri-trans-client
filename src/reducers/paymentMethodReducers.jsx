import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import pmService from '../services/PaymentMethods';

const paymentMethodSlice = createSlice({
    name:'paymentMethod',
    initialState:[],
    reducers:{
        setPaymentMethods(state,action){
            return action.payload;
        },
        appendPaymentMethod(state,action){
            state.push(action.payload);
        }
    }
});

export const createNewPaymentMethod = paymentMethod =>{
    return async dispatch =>{
        const newPm = await pmService.createNew(paymentMethod);
        dispatch(appendPaymentMethod(newPm));
    }
}
export const initializePaymentMethods = () =>{
    return async dispatch =>{
        const pm = await pmService.getAll();
        dispatch(setPaymentMethods(pm));
    }
}
export const {setPaymentMethods, appendPaymentMethod} = paymentMethodSlice.actions;

export default paymentMethodSlice.reducer;