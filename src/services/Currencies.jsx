import axios from "axios";
import {getToken, printError} from "./Utils";

const baseUrl = 'http://193.187.174.234:8080/api/currencies';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl,{headers: getToken()});
        return response?.data;
    } catch (error) {
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
        const response = await axios.post(baseUrl, object,{headers: getToken()});
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
        const response = await axios.put(`${baseUrl}/${id}/edit`, updatedCurrency,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }

}

const deleteCurrency = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}/delete`,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const findCurrencyByName = async (name, notFoundCallback) => {
    try {
        const response = await axios.get(`${baseUrl}/find-by-name/${name}`,{headers: getToken()});
        return response?.data;
    } catch (error) {
        notFoundCallback();
        printError(error);
    }
}
export default {getAll, createNew, update, deleteCurrency, findCurrencyByName};