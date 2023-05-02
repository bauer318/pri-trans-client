import React from 'react';
import axios from "axios";

const baseUrl = 'http://localhost:3001/users';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}
const getOne = async (userId)=>{
    const response = await axios.get(`${baseUrl}/${userId}`);
    return response.data;
}

const createNew = async (user)=>{
    const createdUser = {
        email:user.email,
        role:Number(user.role),
        country:user.country,
        authStatus:false,
        blockingStatus:false,
        infos:{

        }
    }
    const response = await axios.post(baseUrl,createdUser);
    return response.data;
}

const update = async(id, newUser)=>{
    const updatedUser = {
        email:newUser.email,
        role:Number(newUser.role),
        country:newUser.country,
        authStatus:newUser.authStatus,
        blockingStatus:newUser.blockingStatus,
        infos:newUser.infos
    }
    const response = await axios.put(`${baseUrl}/${id}`,updatedUser);
    return response.data;
}

const deleteUser = async id =>{
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
}
export default {getAll, getOne, createNew, update, deleteUser};