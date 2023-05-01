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
        appendCountry(state, action){
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

export const createCountry = country=>{
    return async dispatch =>{
        const newCountry = await countryService.createNew(country);
        dispatch(appendCountry(newCountry));
    }
}

export const {setCountries,appendCountry} = countrySlice.actions;
export default countrySlice.reducer;