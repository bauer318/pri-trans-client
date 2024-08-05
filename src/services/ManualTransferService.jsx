import axios from "axios";
import {baseURL, getToken, printError} from "./Utils";

const baseUrlManualTransfer = baseURL.concat('/simple-orders');

const createNew = async (request) => {
    try {
        const response = await axios.post(baseUrlManualTransfer, request, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getAllByDestination = async (destination, page, size) => {
    try {
        const response = await axios.get(`${baseUrlManualTransfer}/public/${destination}?page=${page}&size=${size}`);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getById = async id => {
    try {
        const response = await axios.get(`${baseUrlManualTransfer}/${id}`,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getSenderPhone = async id => {
    try {
        const response = await axios.get(`${baseUrlManualTransfer}/sender-phone/${id}`,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getForCurrentUser = async (page, size) => {
    try {
        const response = await axios.get(`${baseUrlManualTransfer}/private?page=${page}&size=${size}`,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getForCurrentUserByStatus = async (status, page, size) => {
    try {
        const response = await axios.get(`${baseUrlManualTransfer}/private/${status}?page=${page}&size=${size}`,{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const update = async request => {
    try {
        const response = await axios.put(`${baseUrlManualTransfer}/update`, request, {headers: getToken()},{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const close = async request => {
    try {
        const response = await axios.put(`${baseUrlManualTransfer}/close`, request, {headers: getToken()},{headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export default {
    createNew,
    close,
    update,
    getById,
    getForCurrentUserByStatus,
    getForCurrentUser,
    getSenderPhone,
    getAllByDestination
};