import {createSlice} from "@reduxjs/toolkit";
import accountService from "../services/accountService";
import {setAccounts} from "./accountReducer";
import orderService from "../services/orderService";

const orderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        setOrders(state, action) {
            return action.payload;
        },
        appendOrder(state, action) {
            state.push(action.payload);
        }
    }
});

export const getOrdersToParticipant = (request) => {
    return async dispatch => {
        const orders = await orderService.getToParticipantOrderByStatusAndTransactionType(request);
        dispatch(setOrders(orders));
    }
};

export const getOrdersToFromParticipant = (toFromParticipantId, orderStatus, transactionType) => {
    return async dispatch => {
        const orders = await orderService.getDepositOrders(toFromParticipantId, orderStatus, transactionType);
        dispatch(setOrders(orders));
    }
}

export const getWithdrawOrdersToAgent = toAgentId => {
    return async dispatch => {
        const orders = await orderService.getWithdrawOrders(toAgentId);
        dispatch(setOrders(orders));
    }
}
export const getOrderHistory = (participantId, isClient) => {
    return async dispatch => {
        const orders = await orderService.getOrderHistory(participantId, isClient);
        dispatch(setOrders(orders));
    }
}


export const {setOrders, appendOrder} = orderSlice.actions;
export default orderSlice.reducer;