import axios from "axios";
import instance, {baseURL, getToken, printError} from "./Utils";

const baseUrl = baseURL.concat('/currencies');

const getAll = async (callBack) => {
    try {
        const response = await axios.get(baseUrl, {headers: getToken()});
        callBack();
        return response?.data;
    } catch (error) {
        callBack();
        printError(error);
    }
}

const createNew = async (currency) => {
    const object = {
        currency: currency?.name,
        symbol: currency?.symbol,
        code: currency?.code
    };
    try {
        const response = await axios.post(baseUrl, object, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }

}
const update = async (id, currency) => {
    const updatedCurrency = {
        currency: currency?.currency,
        symbol: currency?.symbol,
        code: currency?.code
    };
    try {
        const response = await axios.put(`${baseUrl}/${id}/edit`, updatedCurrency, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }

}

const deleteCurrency = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}/delete`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const findCurrencyByName = async (name, notFoundCallback) => {
    try {
        const response = await axios.get(`${baseUrl}/find-by-name/${name}`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        notFoundCallback();
        printError(error);
    }
}
const findCurrencyByCode = async (code, notFoundCallback) => {
    try {
        const response = await axios.get(`${baseUrl}/find-by-code/${code}`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        notFoundCallback();
        printError(error);
    }
}

const findCurrenciesNotBelongUser = async userId => {
    try {
        const response = await axios.get(`${baseUrl}/not-user/${userId}`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}
export default {getAll, createNew, update, deleteCurrency, findCurrencyByName, findCurrenciesNotBelongUser,findCurrencyByCode};