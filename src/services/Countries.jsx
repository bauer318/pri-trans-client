import React from 'react';
import axios from "axios";

const baseUrl = 'http://localhost:3001/countries';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const createNew = async (country) => {
    const object = {
        country:country.country,
        currencies:country.currencies,
        paymentMethods:country.paymentMethods
    }
    const response = await axios.post(baseUrl,object);
    return response.data;
}

export default {getAll,createNew};