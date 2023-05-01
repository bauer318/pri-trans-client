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
    }
});

export const initializeCountries = () => {
    return async dispatch => {
        const countries = await countryService.getAll();
        console.log('in country');
        dispatch(setCountries(countries));
    }
}


export const {setCountries} = countrySlice.actions;
export default countrySlice.reducer;