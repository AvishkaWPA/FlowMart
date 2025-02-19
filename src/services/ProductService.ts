// src/services/userService.js
import apiClient from "../axiosInstance";



export const getTrendingProducts =  () => {
    return apiClient.get('/products?limit=10');
};