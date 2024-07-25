import {baseURL, getToken, printError} from "./Utils";
import axios from "axios";

const baseUrl = baseURL.concat('/participants');

const getOne = async (id, notFoundCallBack, foundCallBack) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`, {headers: getToken()});
        foundCallBack();
        return response.data;
    } catch (error) {
        if (error.response?.status === 404) {
            notFoundCallBack();
        }
        foundCallBack();
        printError(error);
    }
}

const updatePassword = async (passwordPut, callBack, wrongPasswordCallback) => {
    try {
        const response = await axios.put(`${baseUrl}/edit-password/`, passwordPut, {headers: getToken()});
        callBack();
        return response.data;
    } catch (error) {
        wrongPasswordCallback();
        printError(error);
    }
}

const updateEmail = async (emailPut, callBack) => {
    try {
        const response = await axios.put(`${baseUrl}/edit-email/`, emailPut, {headers: getToken()});
        callBack();
        return response.data;
    } catch (error) {
        callBack();
        if (error?.response?.status === 500) {
            alert("Failed");
        }
        printError(error);
    }
}

const isVerifiedUser = async (id, callBack) => {
    try {
        const response = await axios.get(`${baseUrl}/is-verified/${id}`, {headers: getToken()});
        callBack();
        return response.data;
    } catch (error) {
        callBack();
        printError(error);
    }
}

export default {getOne, updatePassword, updateEmail, isVerifiedUser}