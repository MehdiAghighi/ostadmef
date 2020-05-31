import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_DOMAIN,
    responseType: "json",
    //  headers: {
    //      Authorization: () => `Bearer ${localStorage.getItem("token")}`,
    //  },
});

API.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    const utm_source = localStorage.getItem("utm_source");
    if (utm_source) {
        config.headers.utm_source = utm_source;
    }
    return config;
});

export default API;
