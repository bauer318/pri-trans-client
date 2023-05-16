import React from 'react';
import axios from "axios";

const baseUrl = 'https://open.er-api.com/v6/latest/';

const getLiveRate = async (baseCurrency)=>{
    const response = await axios.get(`${baseUrl}/${baseCurrency}`);
    return response.data;
}

export default {getLiveRate};