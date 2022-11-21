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

export const getserviceByMechanical = async (mechanicalId) => {
  const LIST_USER_SERVICES = `/services/mechanical/${mechanicalId}`

  const mechanicalService = await api.get(LIST_USER_SERVICES);
  return mechanicalService;
}

export const getServiceById = async (serviceId) => {
  const LIST_SERVICE_ID = `/services/serviceId/${serviceId}`

  const service = await api.get(LIST_SERVICE_ID);
  return service;
}

export const deleteService = async (serviceId) => {
  const DELETE_SERVICE = `/services/delete/${serviceId}`;

  await api.delete(DELETE_SERVICE);
}

export const updateServiceInfo = async (serviceId, serviceInfo) => {
  const UPDATE_SERVICE = `/services/update-by-user/${serviceId}`;

  const data = api.put(UPDATE_SERVICE, serviceInfo);
  return data;
}

export const allWorkshopService = async (workshopId) => {
  const WORKSHOP_SERVICES = `/services/workshop/${workshopId}`;

  const workshopServices = await api.get(WORKSHOP_SERVICES);

  return workshopServices;
}

export const updateServiceByManager = async (serviceId, id) => {
  const UPDATE_SERVICE = `/services/update-by-manager/${serviceId}`;
  console.log(id);

  await api.put(UPDATE_SERVICE, id);

}

export const updateServiceByMechanical = async (serviceId, id) => {
  const UPDATE_SERVICE2 = `/services/update-by-mechanical/${serviceId}`;

  await api.put(UPDATE_SERVICE2, { mechanicalId: id });

}