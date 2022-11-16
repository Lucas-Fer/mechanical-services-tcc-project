import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const createService = async (body) => {
  const CREATE_SERVICE = 'services/register';
  const newUser = await api.post(CREATE_SERVICE, body);

  return newUser;
}

export const getAllServices = async () => {
  const LIST_SERVICES = '/services/'
  const services = await api.get(LIST_SERVICES);

  return services;
}

export const getserviceByUser = async (userId) => {
  const LIST_USER_SERVICES = `/services/${userId}`

  const userServices = await api.get(LIST_USER_SERVICES);
  return userServices;
}