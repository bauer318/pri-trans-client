import {createSlice} from "@reduxjs/toolkit";
import rateService from '../services/ExchangeRate';

const rateSlice = createSlice({
    name:'rates',
    initialState:[],
    reducers:{
        setRates(state, action){
            return action.payload;
        }
    }
})

export const getRate = (base)=>{
    return async dispatch =>{
        const rates = await rateService.getLiveRate(base);
        dispatch(setRates(rates));
    }
}
export const {setRates} = rateSlice.actions;
export default rateSlice.reducer;