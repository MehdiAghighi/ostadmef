import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api",
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
    return config;
});

export default API;
