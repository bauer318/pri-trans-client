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
export default {getAll, getOne};