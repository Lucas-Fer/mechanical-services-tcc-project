import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const loginManager = async (body) => {
  const LOGIN_MANAGER = '/managers/login'
  const user = await api.post(LOGIN_MANAGER, body);
  return user;
}
