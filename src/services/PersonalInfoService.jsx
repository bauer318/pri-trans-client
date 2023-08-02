import React from 'react';
import {printError} from "./Utils";
import axios from "axios";

const baseUrl = 'http://localhost:8081/api/personal-info';

const getOne = async id =>{
    try{
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    }catch (error){
        printError(error);
    }
}

const update = async (id,personalInfoPut) =>{
    try{
        const response = await axios.put(`${baseUrl}/edit/${id}`, personalInfoPut);
        return response.data;
    }catch (error){
        printError(error);
    }
}

const deletePersonalInfo = async id =>{
    try{
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    }catch (error){
        printError(error);
    }
}

export default {getOne, update, deletePersonalInfo};