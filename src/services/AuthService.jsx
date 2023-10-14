import axios from "axios";
import {getToken, printError} from "./Utils";

const baseUrl = '/login';

const login = async (user) => {
    try {
        const response = await axios.post(baseUrl, user,{headers:getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }

}
export default {login}