import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const createService = async (body) => {
  const CREATE_SERVICE = 'services/register';
  const newUser = await api.post(CREATE_SERVICE, body);

  return newUser;
}