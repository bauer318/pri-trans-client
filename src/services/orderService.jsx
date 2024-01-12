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

const confirmWithdrawByAgent = async orderDetails => {
    try {
        const response = await axios.post(baseUrl.concat(`/confirm-withdraw`), orderDetails, {headers: getToken()});
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

const getWithdrawOrders = async fromToParticipantId => {
    try {
        const response = await axios.get(baseUrl.concat(`/to-agent/${fromToParticipantId}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getOrderHistory = async (participantId, isClient, callBack) => {
    try {
        const response = await axios.get(baseUrl.concat(`/history/${participantId}/${isClient}`), {headers: getToken()});
        callBack();
        return response?.data;
    } catch (error) {
        callBack();
        printError(error);
    }
}


const rejectOrder = async (rejectDepositPut, isDepositOrder) => {
    let subUrl = "withdraw";
    if (isDepositOrder) {
        subUrl = "deposit";
    }
    try {
        const response = await axios.put(baseUrl.concat(`/reject-${subUrl}`), rejectDepositPut, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getOrderRate = async (usdFromRate, usdToRate) => {
    try {
        const response = await axios.get(baseUrl.concat(`/rate/${usdFromRate}/${usdToRate}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getToAmount = async (fromAmount, rate) => {
    try {
        const response = await axios.get(baseUrl.concat(`/to-amount/${fromAmount}/${rate}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getRequestedOrdersFromConnectedUser = async selectedCountryId => {
    try {
        const response = await axios.get(baseUrl.concat(`/orders-from-connected-user-country-to/${selectedCountryId}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getRequestedOrdersToConnectedUserCountry = async selectedCountryId => {
    try {
        const response = await axios.get(baseUrl.concat(`/orders-to-connected-user-country-from/${selectedCountryId}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export default {
    getTransactionType,
    getToParticipantOrderByStatusAndTransactionType,
    deleteOrder,
    confirmDeposit,
    getDepositOrders,
    getWithdrawOrders,
    confirmWithdrawByAgent,
    getOrderHistory,
    rejectDepositOrder: rejectOrder,
    getOrderRate,
    getToAmount,
    getRequestedOrdersFromConnectedUser,
    getRequestedOrdersToConnectedUserCountry
}