import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

const CREATE_WORKSHOP = 'http://localhost:3001/workshops/register';
const LOGIN_WORKSHOP = 'http://localhost:3001/workshops/login';

export const createWorkshop = async (body) => {
  const workshop = await api.post(CREATE_WORKSHOP, body);
  return workshop;
}

export const loginWorkshop = async (body) => {
  const workshop = await api.post(LOGIN_WORKSHOP, body);
  return workshop;
}