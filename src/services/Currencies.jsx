import React from 'react';
import axios from "axios";

const baseUrl = 'http://localhost:3001/currencies';

const getAll = async ()=>{
    const response = await axios.get(baseUrl);
    return response.data;
}

export default {getAll};