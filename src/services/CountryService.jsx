import axios from "axios";
import {baseURL, getToken, printError} from "./Utils";

const baseUrlCountry = '/countries';

const getAll = async () => {
    try {
        const response = await axios.get(`${baseURL}${baseUrlCountry}`);
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export const getByName = async name => {
    try {
        const response = await axios.get(`${baseUrlCountry}/by-name/${name}`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export const getById = async id => {
    try {
        const response = await axios.get(`${baseUrlCountry}/${id}`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const createNew = async (country) => {
    try {
        const response = await axios.post(baseUrlCountry, country, {headers: getToken()});
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
        const resp = await axios.put(`${baseUrlCountry}/${id}/edit`, updatedCountry, {headers: getToken()});
        return resp?.data;
    } catch (error) {
        printError(error);
    }

}

const addCurrency = async (id, currency) => {
    try {
        const resp = await axios.put(`${baseUrlCountry}/${id}/add-currency`, currency, {headers: getToken()});
        return resp?.data;
    } catch (error) {
        printError(error);
    }
}

const addPaymentMethod = async (id, paymentMethod) => {
    try {
        const response = await axios.put(`${baseUrlCountry}/${id}/add-pm`, paymentMethod, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

const deleteCountry = async id => {
    try {
        const response = await axios.delete(`${baseUrlCountry}/${id}/delete`, {headers: getToken()});
        return response?.data;
    } catch (error) {
        printError(error);
    }
}

export default {getAll, createNew, update, deleteCountry, addCurrency, addPaymentMethod};