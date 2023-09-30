import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import pmService from '../services/PaymentMethods';


const paymentMethodSlice = createSlice({
    name: 'paymentMethod',
    initialState: [],
    reducers: {
        setPaymentMethods(state, action) {
            return action.payload;
        },
        appendPaymentMethod(state, action) {
            state.push(action.payload);
        }
    }
});

export const createNewPaymentMethod = paymentMethod => {
    return async dispatch => {
        const newPm = await pmService.createNew(paymentMethod);
        dispatch(appendPaymentMethod(newPm));
    }
}
export const initializePaymentMethods = () => {
    return async dispatch => {
        const pm = await pmService.getAll();
        dispatch(setPaymentMethods(pm));
    }
}

export const updatePaymentMethod = (id, paymentMethod) => {
    return async dispatch => {
        await pmService.update(id, paymentMethod);
        const pm = await pmService.getAll();
        dispatch(setPaymentMethods(pm));
    }
}

export const deletePaymentMethod = id => {
    return async dispatch => {
        await pmService.deletePaymentMethod(id);
        const pm = await pmService.getAll();
        dispatch(setPaymentMethods(pm));
    }
}

export const findPaymentMethodByName = (name, notFoundCallback) => {
    return async dispatch => {
        const pm = await pmService.getByName(name, notFoundCallback);
        dispatch(setPaymentMethods([pm]));
    }
}
export const {setPaymentMethods, appendPaymentMethod} = paymentMethodSlice.actions;

export default paymentMethodSlice.reducer;