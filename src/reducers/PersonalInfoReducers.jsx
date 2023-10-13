import {createSlice} from "@reduxjs/toolkit";
import personalInfoService from '../services/PersonalInfoService';

const personalInfoSlice = createSlice(
    {
        name: 'personalInfo',
        initialState: [],
        reducers: {
            setPersonalInfo(state, action) {
                return action.payload;
            }
        }
    }
);

export const initializePersonalInfo = id => {
    return async dispatch => {
        const personalInfo = await personalInfoService.getOne(id);
        dispatch(setPersonalInfo(personalInfo));
    }
}

export const createPersonalInfo = (personalInfo, callBackToUserHomePage) => {
    return async dispatch => {
        const response = await personalInfoService.create(personalInfo, callBackToUserHomePage);
        dispatch(setPersonalInfo(response));
    }
}


export const {setPersonalInfo} = personalInfoSlice.actions;

export default personalInfoSlice.reducer;