import React from 'react';
import axios from "axios";
import {save} from "./LocalStorageService";
import {printError} from "./Utils";

const baseUrl = 'http://localhost:8081/api/login';

const login = async (user) => {
    try {
        const response = await axios.post(baseUrl, user);
        return response.data;
    } catch (error) {
        printError(error);
    }

}
export default {login}