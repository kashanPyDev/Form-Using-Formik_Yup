import axios from 'axios';

export const registerUser = async (formData) => {
  const response = await axios.post('https://your-api-endpoint.com/register', formData);
  return response.data;
};
