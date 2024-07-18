import axios from 'axios';

export const postRequest = async (url, body) => {
    const response = await axios.post(url, body);

    const data = await response.data;

    return data;
};

export const getRequest = async (url) => {
    const response = await axios.post(url);

    const data = await response.data;

    return data;
};
