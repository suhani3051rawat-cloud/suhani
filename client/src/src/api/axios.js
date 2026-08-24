import axios from 'axios';
import React from 'react';

export const api = axios.create({
    baseURL: "http://localhost:5000/admin/Auth",
    withCredentials: true
});

// export const userRegisterApi = axios.create({
//     baseURL : "http://localhost:5000/admin/user",
//     withCredentials : true
// })