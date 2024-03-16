import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://seventh-sunbeam-404107.el.r.appspot.com',
    headers: { 'Cache-Control': 'no-cache' }
});