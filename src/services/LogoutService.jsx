import React from 'react';
import axios from "axios";
import {getToken, printError} from "./Utils";

const baseUrl = "http://localhost:8081/api/logout"
export const logoutUser = async userId => {
    try {
        const response = await axios.get(`${baseUrl}/${userId}`, {headers: getToken()})
        return response.data;
    } catch (error) {
        printError(error);
    }
}
