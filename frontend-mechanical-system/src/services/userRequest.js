import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

const LIST_USERS = 'http://localhost:3001/users';

export const getAllUser = async () => {
  const allUsers = await api.get(LIST_USERS);
  return allUsers;
}
