import {createSlice} from "@reduxjs/toolkit";

const sendSlice = createSlice({
   name:'send',
   initialState:[],
   reducers:{
       setSendDetails(state, action){
           return action.payload;
       }
   }
});

export const initializeSendDetails = sendDetails =>{
    return async dispatch =>{
        dispatch(setSendDetails(sendDetails));
    }
}

export const {setSendDetails} = sendSlice.actions;
export default sendSlice.reducer;