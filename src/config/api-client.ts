import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://mytcrc-423508.el.r.appspot.com',
    headers: { 'Cache-Control': 'no-cache' }
});