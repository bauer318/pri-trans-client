import {baseURL, getToken, printError} from "./Utils";
import axios from "axios";

const baseUrl = baseURL.concat('/orders');

const getTransactionType = async type => {
    try {
        const response = await axios.get(baseUrl.concat(`/by-type/${type}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getToParticipantOrderByStatusAndTransactionType = async request => {
    try {
        const response = await axios.post(baseUrl.concat(`/to-participant-status-transaction`), request, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const deleteOrder = async orderId => {
    try {
        const response = await axios.delete(baseUrl.concat(`/${orderId}/delete`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const confirmDeposit = async (orderDetails, isFromClient) => {
    try {
        const response = await axios.post(baseUrl.concat(`/confirm-deposit/${isFromClient}`), orderDetails, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getDepositOrders = async (toParticipantId, orderStatus, transactionType) => {
    try {
        const response = await axios.get(baseUrl.concat(`/to-from-participant-status-transaction/${toParticipantId}/${orderStatus}/${transactionType}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}


export default {getTransactionType, getToParticipantOrderByStatusAndTransactionType, deleteOrder, confirmDeposit, getDepositOrders}