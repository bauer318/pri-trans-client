import axios from "axios";
import {getToken, printError} from "./Utils";

const baseUrl = "http://193.187.174.234:8080/api/logout"
export const logoutUser = async userId => {
    try {
        const response = await axios.get(`${baseUrl}/${userId}`, {headers: getToken()})
        return response.data;
    } catch (error) {
        printError(error);
    }
}
