import axios from "axios";
import {printError} from "./Utils";

const baseUrl = 'http://localhost:8080/api/login';

const login = async (user) => {
    try {
        const response = await axios.post(baseUrl, user);
        return response.data;
    } catch (error) {
        printError(error);
    }

}
export default {login}