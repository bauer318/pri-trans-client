import {createSlice} from "@reduxjs/toolkit";
import walletService from "../services/walletService";
import userService from "../services/UserService";
import {initializeUsers} from "./userReducers";
import async from "async";

const walletSlice = createSlice({
    name: 'wallet',
    initialState: [],
    reducers: {
        setWallets(state, action) {
            return action.payload;
        },
        appendWallet(state, action) {
            state.push(action.payload);
        }
    }
});

export const createWallet = wallet => {
    return async dispatch => {
        const newWallet = await walletService.createNew(wallet);
        if (newWallet) {
            appendWallet(newWallet);
        }
    }
}

export const getWalletsByParticipant = participantId=>{
    return async dispatch => {
        const wallets = await walletService.getAllByUser(participantId);
        if (wallets) {
            dispatch(setWallets(wallets));
        }
    }
}

export const updateWallet = (wallet, id) =>{
    return async  dispatch=>{
        const updatedWallet = await walletService.updateWallet(wallet,id);
        if(updatedWallet){
            getWalletsByParticipant(wallet?.participantId);
        }
    }
}

export const {setWallets, appendWallet} = walletSlice.actions;
export default walletSlice.reducer;