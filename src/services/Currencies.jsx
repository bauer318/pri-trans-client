import React from 'react';
import axios from "axios";
import {printError} from "./Utils";

const baseUrl = 'http://localhost:8081/api/currencies';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const createNew = async (currency) => {
    const object = {
        currency: currency?.currency,
        symbol: currency?.symbol,
    };
    try {
        const response = await axios.post(baseUrl, object);
        return response?.data;
    } catch (error) {
        printError(error);
    }

}
const update = async (id, currency) => {
    const updatedCurrency = {
        currency: currency?.currency,
        symbol: currency?.symbol
    };
    try {
        const response = await axios.put(`${baseUrl}/${id}`, updatedCurrency);
        return response?.data;
    } catch (error) {
        printError(error);
    }

}

const deleteCurrency = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response?.data;
    } catch (error) {
        printError(error);
    }

}
export default {getAll, createNew, update, deleteCurrency};