import {createSlice} from "@reduxjs/toolkit";
import accountService from "../services/accountService";
import userService from "../services/UserService";
import {initializeUsers} from "./userReducers";


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

export const initializeAccounts = () => {
    return async dispatch => {
        const account = await accountService.getAllByUser();
        dispatch(setAccounts(account));
    }
};

export const createAccount = (currencyId) => {
    return async dispatch => {
        const newAccount = await accountService.createNew(currencyId);
        if (newAccount) {
            initializeAccounts();
        }
    }
}

export const {setAccounts, appendAccount} = accountSlice.actions;
export default accountSlice.reducer;