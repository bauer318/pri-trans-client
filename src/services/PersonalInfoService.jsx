import {baseURL, getToken, printError} from "./Utils";
import axios from "axios";

const baseUrl = baseURL.concat('/personal-info');

const getOne = async (id, notFoundCallBack) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`, {headers: getToken()});
        return response.data;
    } catch (error) {
        if (error.response?.status === 404) {
            notFoundCallBack();
        }
        printError(error);
    }
}

const update = async (id, personalInfoPut) => {
    try {
        const response = await axios.put(`${baseUrl}/edit/${id}`, personalInfoPut, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const deletePersonalInfo = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const create = async (personalInfo, callBackToUserHomePage) => {
    try {
        const response = await axios.post(`${baseUrl}`, personalInfo, {headers: getToken()});
        callBackToUserHomePage();
        return response.data;
    } catch (error) {
        callBackToUserHomePage();
        printError(error);
    }
}

export default {getOne, update, deletePersonalInfo, create};