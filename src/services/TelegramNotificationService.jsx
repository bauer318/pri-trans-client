import axios from "axios";
import {baseURL, getToken, printError} from "./Utils";

const baseUrlTelegramNotification = baseURL.concat('/telegram-notification');

const notifyAll = async (orderRequest) => {
    try {
        const response = await axios.post(`${baseUrlTelegramNotification}/notifyAll-orders`, orderRequest, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const generateCode = async () => {
    try {
        const response = await axios.get(`${baseUrlTelegramNotification}/generate-code`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const subscribe = async () => {
    try {
        const response = await axios.get(`${baseUrlTelegramNotification}/subscribe`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const unsubscribe = async () => {
    try {
        const response = await axios.get(`${baseUrlTelegramNotification}/unsubscribe`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}



const isSubscribedUser = async username => {
    try {
        const response = await axios.get(`${baseUrlTelegramNotification}/is-subscribed-user?username=${username}`,
            {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getCodeByCodeStr = async codeStr =>{
    try{
        const response = await axios.get(`${baseUrlTelegramNotification}/code/${codeStr}`,{headers:getToken()});
        return response?.data;
    }catch (error){
        printError(error);
    }
}

const getCodeByUsername = async username =>{
    try{
        const response = await axios.get(`${baseUrlTelegramNotification}/code/by-username/${username}`,{headers:getToken()});
        return response?.data;
    }catch (error){
        printError(error);
    }
}

export default {notifyAll, generateCode, subscribe, isSubscribedUser, getCodeByCodeStr, getCodeByUsername,unsubscribe}