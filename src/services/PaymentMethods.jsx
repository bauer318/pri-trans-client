import axios from "axios";
import {getToken, printError} from "./Utils";

const baseUrl = 'http://193.187.174.234:8080/api/payment-methods';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}
const createNew = async (paymentMethod) => {
    try {
        const response = await axios.post(baseUrl, paymentMethod,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const update = async (id, paymentMethod) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}/edit`, paymentMethod,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const deletePaymentMethod = async paymentMethodId => {
    try {
        const response = await axios.delete(`${baseUrl}/${paymentMethodId}/delete`,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getByName = async (name, notFoundCallback) => {
    try {
        const response = await axios.get(`${baseUrl}/find-by-name/${name}`,{headers: getToken()});
        return response?.data;
    } catch (error) {
        notFoundCallback();
        printError(error);
    }

}
export default {getAll, createNew, update, deletePaymentMethod, getByName};