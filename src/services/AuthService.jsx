import React from 'react';
import axios from "axios";
import {save} from "./LocalStorageService";

const baseUrl = 'http://localhost:8081/api/login';

const login = async (user) => {
    const response = await axios.post(baseUrl,user);
    return response.data;
}
export default {login}