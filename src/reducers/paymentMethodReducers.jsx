import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import pmService from '../services/PaymentMethods';

const paymentMethodSlice = createSlice({
    name:'paymentMethod',
    initialState:[],
    reducers:{
        setPaymentMethods(state,action){
            return action.payload;
        }
    }
});

export const initializePaymentMethods = () =>{
    return async dispatch =>{
        const pm = await pmService.getAll();
        dispatch(setPaymentMethods(pm));
    }
}
export const {setPaymentMethods} = paymentMethodSlice.actions;

export default paymentMethodSlice.reducer;