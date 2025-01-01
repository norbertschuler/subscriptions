import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchSubscriptions = async () => {
    const response = await axios.get(`${API_BASE_URL}/subscriptions/`);
    return response.data;
};

export const createSubscription = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/subscriptions/`, data);
    return response.data;
};

export const updateSubscription = async (id, data) => {
    const response = await axios.put(`${API_BASE_URL}/subscriptions/${id}/`, data);
    return response.data;
};

export const deleteSubscription = async (id) => {
    await axios.delete(`${API_BASE_URL}/subscriptions/${id}/`);
};
