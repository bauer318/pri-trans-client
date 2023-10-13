import currencyService from '../services/Currencies';
import {createSlice} from "@reduxjs/toolkit";

;


const currencySlice = createSlice({
    name: 'currency',
    initialState: [],
    reducers: {
        setCurrencies(state, action) {
            return action.payload;
        },
        appendCurrency(state, action) {
            state.push(action.payload);
        }
    }
})

export const createCurrency = currency => {
    return async dispatch => {
        const newCurrency = await currencyService.createNew(currency);
        dispatch(appendCurrency(newCurrency));
    }
}
export const initializeCurrencies = () => {
    return async dispatch => {
        const currencies = await currencyService.getAll();
        dispatch(setCurrencies(currencies));
    }
}
export const updateCurrency = (id, currency) => {
    return async dispatch => {
        await currencyService.update(id, currency);
        const currencies = await currencyService.getAll();
        dispatch(setCurrencies(currencies));
    }
}

export const deleteCurrency = id => {
    return async dispatch => {
        await currencyService.deleteCurrency(id);
        const currencies = await currencyService.getAll();
        dispatch(setCurrencies(currencies));
    }
}

export const findCurrencyByName = (name, notFoundCallback) => {
    return async dispatch => {
        const currency = await currencyService.findCurrencyByName(name, notFoundCallback);
        dispatch(setCurrencies([currency]));
    }
}
export const {setCurrencies, appendCurrency} = currencySlice.actions;

export default currencySlice.reducer;