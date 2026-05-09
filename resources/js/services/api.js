// resources/js/services/api.js

import axios from "axios";

const api = axios.create({
    baseURL: "/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
});

const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");

if (token) {
    api.defaults.headers.common["X-CSRF-TOKEN"] = token;
}

export default api;