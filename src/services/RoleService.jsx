import React from 'react';
import {printError} from "./Utils";
import axios from "axios";

const baseUrl = 'http://localhost:8081/api/roles';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        printError(error);
    }
}

const getOne = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        printError(error);
    }
}

export {getAll, getOne};