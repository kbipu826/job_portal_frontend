import axios from 'axios';
import { getSession } from 'next-auth/react';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://job-portal-backend-1s0o.onrender.com/api';

export const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true // Important for CORS with credentials
});

// Add a request interceptor to add the auth token
api.interceptors.request.use(async (config) => {
    const session = await getSession();
    if (session?.user?.token?.accessToken) {
        config.headers.Authorization = `Bearer ${session.user.token.accessToken}`;
    }
    return config;
});

// Add a response interceptor to handle errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
); 