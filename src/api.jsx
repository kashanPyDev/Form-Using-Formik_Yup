import axios from 'axios';

export const registerUser = async (formData) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts?_start=&_limit=3', formData);
  return response.data;
};
