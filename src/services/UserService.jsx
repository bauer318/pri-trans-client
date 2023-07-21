import React from 'react';
import axios from "axios";
import {printError} from "./Utils";

const baseUrl = 'http://localhost:8081/api/users';
const authStatusPath = 'auth-status';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
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
const getOne = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/${userId}`);
        return response.data;
    } catch (error) {
        printError(error);
    }

}

const createNew = async (user) => {
    const role = user.role ? Number(user.role) : 4;
    const createdUser = {
        email: user.email,
        role: role,
        country: user.country,
        authStatus: false,
        blockingStatus: false,
        infos: {}
    }
    try {
        const response = await axios.post(baseUrl, createdUser);
        return response.data;
    } catch (error) {
        printError(error);
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
        email: newUser.email,
        role: Number(newUser.role),
        country: newUser.country,
        authStatus: newUser.authStatus,
        blockingStatus: newUser.blockingStatus,
        infos: newUser.infos
    }
    try {
        const response = await axios.put(`${baseUrl}/${id}`, updatedUser);
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
export default {getAll, getOne, createNew, update, deleteUser, getUserByEmail, getByRoleAndAuthStatus, getByAuthStatus};