import {baseURL, getToken, printError} from "./Utils";
import axios from "axios";

const baseUrl = baseURL.concat('/accounts');

const createNew = async (currencyId) => {
    const object = {
        currencyId: currencyId
    };
    try {
        const response = await axios.post(baseUrl, object, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }

}

const getAllByUser = async () => {
    try {
        const response = await axios.get(baseUrl.concat("/all-user-accounts"), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getFundingAccount = async fromAccountId =>{
    try {
        const response = await axios.get(baseUrl.concat(`/funding-account/${fromAccountId}`), {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export default {createNew, getAllByUser,getFundingAccount}