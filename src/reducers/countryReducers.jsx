import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import countryService from '../services/Countries'


const countrySlice = createSlice({
    name: 'country',
    initialState: [],
    reducers: {
        setCountries(state, action) {
            return action.payload;
        },
        appendCountry(state, action) {
            state.push(action.payload);
        }
    }
});

export const initializeCountries = () => {
    return async dispatch => {
        const countries = await countryService.getAll();
        dispatch(setCountries(countries));
    }
}

export const createCountry = country => {
    return async dispatch => {
        const newCountry = await countryService.createNew(country);
        dispatch(appendCountry(newCountry));
    }
}

export const updateCountry = (id, country) => {
    return async dispatch => {
        await countryService.update(id, country);
        const countries = await countryService.getAll();
        dispatch(setCountries(countries));
    }
}

export const deleteCountry = id => {
    return async dispatch => {
        await countryService.deleteCountry(id);
        const countries = await countryService.getAll();
        dispatch(setCountries(countries));
    }
}

export const addPaymentMethod = (id, paymentMethod) => {
    return async dispatch => {
        await countryService.addPaymentMethod(id, paymentMethod);
        const countries = await countryService.getAll();
        dispatch(setCountries(countries));
    }
}

export const addCurrency = (id, currency) => {
    return async dispatch => {
        await countryService.addCurrency(id, currency);
        const countries = await countryService.getAll();
        dispatch(setCountries(countries));
    }
}

export const {setCountries, appendCountry} = countrySlice.actions;
export default countrySlice.reducer;