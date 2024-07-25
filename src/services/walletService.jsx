import axios from "axios";
import {baseURL, getToken, printError} from "./Utils";

const baseUrl = baseURL.concat('/wallets');

const getAllByUser = async (participantId, callBack) => {
    try {
        const response = await axios.get(baseUrl.concat(`/by-participant/${participantId}`), {headers: getToken()});
        callBack();
        return response?.data;
    } catch (error) {
        callBack();
        printError(error);
    }
}
const createNew = async (wallet, callBack) => {
    try {
        const response = await axios.post(baseUrl, wallet, {headers: getToken()});
        callBack();
        return response?.data;
    } catch (error) {
        callBack();
        alert("Failed");
        printError(error);
    }
}

const updateWallet = async (wallet, id, callBack) => {
    try {
        const response = await axios.put(baseUrl.concat(`/${id}/edit`), wallet, {headers: getToken()});
        callBack();
        return response?.data;
    } catch (error) {
        callBack();
        printError(error);
    }
}

const getWallet = async (participantId, currency, paymentMethod) => {
    try {
        const response = await axios.get(baseUrl.concat(`/${participantId}/${currency}/${paymentMethod}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getUserPaymentMethodByCurrency = async (participantId, currency) => {
    try {
        const response = await axios.get(baseUrl.concat(`/pm-by-user/${participantId}/${currency}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export default {getAllByUser, createNew, updateWallet, getWallet, getUserPaymentMethodByCurrency}
