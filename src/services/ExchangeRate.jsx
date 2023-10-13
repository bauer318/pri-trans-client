import axios from "axios";
import {printError} from "./Utils";

const baseUrl = 'https://open.er-api.com/v6/latest/';

const getLiveRate = async (baseCurrency) => {
    try {
        const response = await axios.get(`${baseUrl}/${baseCurrency}`);
        return response?.data;
    } catch (error) {
        printError(error);
    }

}

export default {getLiveRate};