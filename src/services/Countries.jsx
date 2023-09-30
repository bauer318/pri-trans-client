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

export const getByName = async name => {
    try {
        const response = await axios.get(`${baseUrl}/by-name/${name}`);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export const getById = async id => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const createNew = async (country) => {
    try {
        const response = await axios.post(baseUrl, country);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const update = async (id, country) => {
    const updatedCountry = {
        countryName: country?.name,
        countryCode: country?.code,
        countryIso: country?.iso,
        phoneCode: country?.phoneCode,
        currencies: country?.currencies,
        paymentMethods: country?.paymentMethods
    }
    try {
        const resp = await axios.put(`${baseUrl}/${id}/edit`, updatedCountry);
        return resp?.data;
    } catch (error) {
        printError(error);
    }

}

const addCurrency = async (id, currency) => {
    try {
        const resp = await axios.put(`${baseUrl}/${id}/add-currency`, currency);
        return resp?.data;
    } catch (error) {
        printError(error);
    }
}

const addPaymentMethod = async (id, paymentMethod)=>{
    try{
        const response = await axios.put(`${baseUrl}/${id}/add-pm`, paymentMethod);
        return response?.data;
    }catch(error){
        printError(error);
    }
}

const deleteCountry = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}/delete`);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export default {getAll, createNew, update, deleteCountry, addCurrency, addPaymentMethod};