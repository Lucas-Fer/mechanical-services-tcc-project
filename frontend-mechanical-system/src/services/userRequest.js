import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

const LIST_USERS = 'http://localhost:3001/users';
const CREATE_USER = 'http://localhost:3001/users/register';
const LOGIN_USER = 'http://localhost:3001/users/login';

export const getAllUser = async () => {
  const allUsers = await api.get(LIST_USERS);
  return allUsers;
}

export const createUser = async (body) => {
  const newUser = await api.post(CREATE_USER, body);

  return newUser;
}

export const loginUser = async (body) => {
  const user = await api.post(LOGIN_USER, body);
  return user;

}

