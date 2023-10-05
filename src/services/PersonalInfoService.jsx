import React from 'react';
import {getToken, printError} from "./Utils";
import axios from "axios";

const baseUrl = 'http://localhost:8081/api/personal-info';

const getOne = async id => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const update = async (id, personalInfoPut) => {
    try {
        const response = await axios.put(`${baseUrl}/edit/${id}`, personalInfoPut, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const deletePersonalInfo = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`, {headers: getToken()});
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const create = async (personalInfo, callBackToUserHomePage) => {
    try {
        const response = await axios.post(`${baseUrl}`, personalInfo, {headers: getToken()});
        console.log(response.data);
        callBackToUserHomePage();
        return response.data;
    } catch (error) {
        printError(error);
    }
}

export default {getOne, update, deletePersonalInfo, create};