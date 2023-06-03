import React from 'react';
import axios from "axios";

const baseUrl = 'http://localhost:8081/api/users';
const authStatusPath = 'auth-status';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const getByRoleAndAuthStatus = async (rq) => {
    console.log(rq);
    const response = await axios.post(baseUrl + "/sort", rq);
    return response.data;
}

const getByAuthStatus = async (authStatus) => {
    const response = await axios.get(`${baseUrl}/${authStatusPath}/${authStatus}`);
    return response.data;
}
const getOne = async (userId) => {
    const response = await axios.get(`${baseUrl}/${userId}`);
    return response.data;
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
    const response = await axios.post(baseUrl, createdUser);
    return response.data;
}

const getUserByEmail = async (email) => {
    const response = await axios.get(`${baseUrl}/${email}`);
    return response.data;
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
    const response = await axios.put(`${baseUrl}/${id}`, updatedUser);
    return response.data;
}

const deleteUser = async id => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
}
export default {getAll, getOne, createNew, update, deleteUser, getUserByEmail, getByRoleAndAuthStatus, getByAuthStatus};