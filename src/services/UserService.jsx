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

const getByRole = async roleRq =>{
    try{
        const response = await axios.post(baseUrl+"/sort-by-role", roleRq);
        return response.data;
    }catch(error){
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
    const createdUser = {
        ...user,
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
        ... newUser,
        email: newUser.email,
        userRole:newUser.userRole,
        country:newUser.country,
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
export default {getAll, getOne, createNew, update, deleteUser, getUserByEmail, getByRoleAndAuthStatus, getByAuthStatus, getByRole};