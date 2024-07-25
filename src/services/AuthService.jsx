import axios from "axios";
import {baseURL, getToken, printError} from "./Utils";

const baseUrl = baseURL.concat('/login');

const login = async (user) => {
    try {
        const response = await axios.post(baseUrl, user,{headers:getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }

}
export default {login}