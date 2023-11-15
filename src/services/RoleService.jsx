import {baseURL,getToken, printError} from "./Utils";
import axios from "axios";

const baseUrl = baseURL.concat('/roles');

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl,{headers:getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const getOne = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`,{headers:getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

export {getAll, getOne};