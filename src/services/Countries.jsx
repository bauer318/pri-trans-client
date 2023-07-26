import React from 'react';
import axios from "axios";
import {printError} from "./Utils";

const baseUrl = 'http://localhost:8081/api/countries';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const getByName = async name => {
    try {
        const response = await axios.get(`${baseUrl}/by-name/${name}`);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export const getById = async id =>{
    try{
        const response = await axios.get(`${baseUrl}/${id}`);
        return response?.data;
    }catch (error){
        printError(error);
    }
}

const createNew = async (country) => {
    const object = {
        country: country?.country,
        currencies: country?.currencies,
        paymentMethods: country?.paymentMethods
    }
    try {
        const response = await axios.post(baseUrl, object);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const update = async (id, country) => {
    const updatedCountry = {
        country: country?.country,
        currencies: country?.currencies,
        paymentMethods: country?.paymentMethods
    }
    try {
        const resp = await axios.put(`${baseUrl}/${id}`, updatedCountry);
        return resp?.data;
    } catch (error) {
        printError(error);
    }

}

const deleteCountry = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export default {getAll, createNew, update, deleteCountry};