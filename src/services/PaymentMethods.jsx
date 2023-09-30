import React from 'react';
import axios from "axios";
import {printError} from "./Utils";

const baseUrl = 'http://localhost:8081/api/payment-methods';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}
const createNew = async (paymentMethod) => {
    try {
        const response = await axios.post(baseUrl, paymentMethod);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const update = async (id, paymentMethod) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}/edit`, paymentMethod);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const deletePaymentMethod = async paymentMethodId => {
    try {
        const response = await axios.delete(`${baseUrl}/${paymentMethodId}/delete`);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getByName = async (name, notFoundCallback) => {
    try {
        const response = await axios.get(`${baseUrl}/find-by-name/${name}`);
        return response?.data;
    } catch (error) {
        notFoundCallback();
        printError(error);
    }

}
export default {getAll, createNew, update, deletePaymentMethod, getByName};