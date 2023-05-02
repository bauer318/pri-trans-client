import React from 'react';
import axios from "axios";

const baseUrl = 'http://localhost:3001/paymentMethods';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}
const createNew = async (paymentMethod) => {
    const object = {
        paymentMethod: paymentMethod.paymentMethod
    }
    const response = await axios.post(baseUrl, object);
    return response.data;
}

const update = async (id, paymentMethod) => {
    const updatedPM = {
        paymentMethod: paymentMethod.paymentMethod
    };
    const response = await axios.put(`${baseUrl}/${id}`, updatedPM);
    return response.data;
}

const deletePaymentMethod = async id => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
}
export default {getAll, createNew, update, deletePaymentMethod};