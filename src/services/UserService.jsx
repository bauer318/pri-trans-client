import {baseURL, getToken, printError} from "./Utils";
import axios from "axios";

const baseUrl = `${baseURL}/users`;
const authStatusPath = 'auth-status';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const getByRoleAndAuthStatus = async (rq) => {
    try {
        const response = await axios.post(baseUrl + "/sort", rq, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const getByAuthStatus = async (authStatus) => {
    try {
        const response = await axios.get(`${baseUrl}/${authStatusPath}/${authStatus}`, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const getByRole = async roleRq => {
    try {
        const response = await axios.post(baseUrl + "/sort-by-role", roleRq, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}
const getOne = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/${userId}`, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }

}

const createNew = async (user, errorCallBack, toHome) => {
    const createdUser = {
        ...user,
        authStatus: false,
        blockingStatus: false,
        infos: {}
    }
    try {
        const response = await axios.post(`${baseUrl}/register`, createdUser, {headers: getToken()});
        toHome();
        return response.data;
    } catch (error) {
        errorCallBack();
        if (error?.response?.status === 409) {
            const message = error.response.data?.message;
            alert(message);
        } else if (error?.response?.status === 400) {
            console.log('400 ', error.response);
        } else if (error.request) {
            alert("Something went wrong please try again later");
        }
    }

}

const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(`${baseUrl}/find-by-email/${email}`, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}
const update = async (id, newUser) => {
    const updatedUser = {
        ...newUser,
        email: newUser.email,
        userRole: newUser.userRole,
        country: newUser.country,
    }
    try {
        const response = await axios.put(`${baseUrl}/edit/${id}`, updatedUser, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }

}

const deleteUser = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const isUserFromCountry = async (email, countryId) => {
    try {
        const response = await axios.get(`${baseUrl}/live-in-country/${email}/${countryId}`, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}
export default {
    getAll,
    getOne,
    createNew,
    update,
    deleteUser,
    getUserByEmail,
    getByRoleAndAuthStatus,
    getByAuthStatus,
    getByRole,
    isUserFromCountry
};