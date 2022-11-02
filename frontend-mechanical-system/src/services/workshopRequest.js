import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

const LOGIN_USER = 'http://localhost:3001/workshops/register';


export const createWorkshop = async (body) => {
  const allUsers = await api.post(LOGIN_USER, body);
  return allUsers;
}