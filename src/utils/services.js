import axios from 'axios';

export const postRequest = async (url, body, token = null, formData = false) => {
    const config = {
        headers: {
            'Content-Type': formData ? 'multipart/form-data' : 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        },
    };

    const response = await axios.post(url, formData ? body : JSON.stringify(body), config);

    const data = await response.data;

    return data;
};

export const getRequest = async (url, token = null) => {
    const config = token
        ? {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }
        : {};

    const response = await axios.post(url, config);

    const data = await response.data;

    return data;
};
