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

export const loginMechanical = async (body) => {
  const LOGIN_MECHANICAL = '/mechanics/login';

  const mechanical = await api.post(LOGIN_MECHANICAL, body);

  return mechanical;
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

export const createNewMechanical = async (mechanicalData, workshopId) => {
  const CREATE_MECHANICAL = `http://localhost:3001/workshops/${workshopId}/register-mechanical/`;

  const workshop = await api.post(CREATE_MECHANICAL, mechanicalData);

  return workshop;
}

export const createNewManager = async (managerData, workshopId) => {
  const CREATE_MANAGER = `http://localhost:3001/workshops/${workshopId}/register-manager/`;

  const workshop = await api.post(CREATE_MANAGER, managerData);

  return workshop;
}

export const deleteWorkshopMechanical = async (id) => {
  const DELETE_MECHANICAL = `mechanics/delete/${id}`

  await api.delete(DELETE_MECHANICAL);
}

export const deleteWorkshopManager = async (id) => {
  const DELETE_MANAGER = `managers/delete/${id}`

  await api.delete(DELETE_MANAGER);
}