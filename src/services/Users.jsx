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
    const object = {
        email:user.email,
        role:Number(user.role),
        country:user.country,
        authStatus:false,
        blockingStatus:false,
        infos:{

        }
    }
    const response = await axios.post(baseUrl,object);
    return response.data;
}
export default {getAll, getOne, createNew};