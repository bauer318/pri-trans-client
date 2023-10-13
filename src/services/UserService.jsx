import {getToken, printError} from "./Utils";
import axios from "axios";

const baseUrl = 'http://localhost:8080/api/users';
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
        const response = await axios.post(baseUrl + "/sort", rq);
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const getByAuthStatus = async (authStatus) => {
    try {
        const response = await axios.get(`${baseUrl}/${authStatusPath}/${authStatus}`);
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const getByRole = async roleRq => {
    try {
        const response = await axios.post(baseUrl + "/sort-by-role", roleRq);
        return response.data;
    } catch (error) {
        printError(error);
    }
}
const getOne = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/${userId}`);
        return response.data;
    } catch (error) {
        printError(error);
    }

}

const createNew = async (user, errorCallBack) => {
    const createdUser = {
        ...user,
        authStatus: false,
        blockingStatus: false,
        infos: {}
    }
    try {
        const response = await axios.post(`${baseUrl}/register`, createdUser);
        console.log('user created ');
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
        const response = await axios.get(`${baseUrl}/${email}`);
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
        const response = await axios.put(`${baseUrl}/edit/${id}`, updatedUser);
        return response.data;
    } catch (error) {
        printError(error);
    }

}

const deleteUser = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
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
    getByRole
};