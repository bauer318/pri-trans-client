import axios from "axios";
import {getToken, printError} from "./Utils";

const baseUrl = "/logout"
export const logoutUser = async userId => {
    try {
        const response = await axios.get(`${baseUrl}/${userId}`, {headers: getToken()})
        return response.data;
    } catch (error) {
        printError(error);
    }
}
