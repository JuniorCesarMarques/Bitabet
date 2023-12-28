import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

export const useApi = () => ({
    signin: async (email: string, password: string) => {
        const response = await api.post('/login', { email, password });
        return response.data;
    },
    
    logout: async () => { }
});