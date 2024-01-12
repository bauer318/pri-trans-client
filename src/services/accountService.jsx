import {baseURL, getToken, printError} from "./Utils";
import axios from "axios";

const baseUrl = baseURL.concat('/accounts');

const createNew = async (currencyId,callBack) => {
    const object = {
        currencyId: currencyId
    };
    try {
        const response = await axios.post(baseUrl, object, {headers: getToken()});
        callBack();
        return response?.data;
    } catch (error) {
        printError(error);
    }

}

const sendTo = async orderRq => {
    try {
        const response = await axios.post(baseUrl.concat(`/send`), orderRq, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const withdraw = async (orderRq,callBack) => {
    try {
        const response = await axios.post(baseUrl.concat(`/withdraw`), orderRq, {headers: getToken()});
        callBack();
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getAllByUser = async (callBack) => {
    try {
        const response = await axios.get(baseUrl.concat("/all-user-accounts"), {headers: getToken()});
        callBack();
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getFundingAccount = async fromAccountId => {
    try {
        const response = await axios.get(baseUrl.concat(`/funding-account/${fromAccountId}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getAgentAccountWithMin = async agentAccountRq => {
    try {
        const response = await axios.post(baseUrl.concat(`/agents-account-min`), agentAccountRq, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getAgentAccountWithMax = async agentAccountRq => {
    try {
        const response = await axios.post(baseUrl.concat(`/agents-account-max`), agentAccountRq, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const deposit = async (depositRq,callBack) => {
    try {
        const response = await axios.post(baseUrl.concat(`/deposit`), depositRq, {headers: getToken()});
        callBack();
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getUserMainAccount = async (email, currencyCode) => {
    try {
        const response = await axios.get(baseUrl.concat(`/user-main-account/${email}/${currencyCode}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const canWithdraw = async (accountId, amount) => {

    try {
        const response = await axios.get(baseUrl.concat(`/can-withdraw/${accountId}/${amount}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export default {
    createNew,
    getAllByUser,
    getFundingAccount,
    getAgentAccountWithMin,
    deposit,
    getUserMainAccountId: getUserMainAccount,
    sendTo,
    withdraw,
    getAgentAccountWithMax,
    canWithdraw
}