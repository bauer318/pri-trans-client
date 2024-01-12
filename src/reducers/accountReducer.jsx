import {createSlice} from "@reduxjs/toolkit";
import accountService from "../services/accountService";


const accountSlice = createSlice({
    name: 'account',
    initialState: [],
    reducers: {
        setAccounts(state, action) {
            return action.payload;
        },
        appendAccount(state, action) {
            state.push(action.payload);
        }
    }
});

export const initializeAccounts = (callBack) => {
    return async dispatch => {
        const account = await accountService.getAllByUser(callBack);
        dispatch(setAccounts(account));
    }
};

export const createAccount = (currencyId, callBack) => {
    return async dispatch => {
        const newAccount = await accountService.createNew(currencyId,callBack);
        if (newAccount) {
            initializeAccounts(callBack);
        }
    }
}

export const {setAccounts, appendAccount} = accountSlice.actions;
export default accountSlice.reducer;