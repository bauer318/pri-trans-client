import React from 'react';
import axios from "axios";

const baseUrl = 'http://localhost:3001/paymentMethods';

const getAll = async ()=>{
    const response = await axios.get(baseUrl);
    return response.data;
}
const createNew = async(paymentMethod) => {
    const object ={
        paymentMethod:paymentMethod.paymentMethod
    }
    const response = await axios.post(baseUrl,object);
    return response.data;
}
export default  {getAll,createNew};