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

export const getAllWorkshopManagers = async (workshopId) => {
  const LIST_WORKSHOP_MANAGERS = `http://localhost:3001/workshops/${workshopId}/workshop-managers`;

  const workshop = await api.get(LIST_WORKSHOP_MANAGERS);

  return workshop;
}

export const getAllWorkshopMechanicals = async (workshopId) => {
  const LIST_WORKSHOP_MECHANICALS = `http://localhost:3001/workshops/${workshopId}/workshop-mechanicals`;

  const workshop = await api.get(LIST_WORKSHOP_MECHANICALS);

  return workshop;
}
