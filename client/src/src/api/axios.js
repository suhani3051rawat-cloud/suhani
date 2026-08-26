import axios from 'axios';
import React from 'react';

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://website-6-2r9x.onrender.com";

export const api = axios.create({
  baseURL: `${API_URL}/admin/Auth`,
  withCredentials: true,
});
