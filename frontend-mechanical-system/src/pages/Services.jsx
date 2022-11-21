import React, { useContext, useEffect, useState } from 'react'
import ServiceCard from '../components/ServiceCard';
import UserHeader from '../components/UserHeader'
import { useHistory } from 'react-router-dom';
import WorkshopHeader from '../components/WorkshopHeader'
import { SystemContext } from '../context/SystemContext';
import { allWorkshopService, getAllServices, getserviceByUser } from '../services/serviceRequest';
import { MainStyled, CardSection } from '../styles/Service.styled';

export default function Services() {
  const { userInfo } = useContext(SystemContext);

  const [services, setServices] = useState([]);
  const [userService, setUserService] = useState([]);
  const [workshopServices, setWorkshopServices] = useState([]);

  let history = useHistory();

  const getServices = async () => {
    try {
      const { data } = await getAllServices();
      setServices(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getUserService = async (id) => {
    try {
      const { data } = await getserviceByUser(id.toString());
      setUserService(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getWorkshopServices = async (id) => {
    try {
      const { data } = await allWorkshopService(id.toString());
      setWorkshopServices(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    if (!userInfo.user_role) history.push('/');
    if (userInfo.user_role === 'CLIENT') getUserService(userInfo.user_id);
    if (userInfo.user_role === 'ADMIN' || userInfo.user_role === 'MANAGER') getWorkshopServices(userInfo.workshop_id);

    getServices();
  }, []);

  return (
    <>
      {userInfo.user_role === 'CLIENT' ? <UserHeader /> : <WorkshopHeader />}

      {userInfo.user_role === 'CLIENT' && (
        <MainStyled>
          <h3 style={{ color: '#056CF9 ' }}>Meus serviços</h3>

          <CardSection>
            {userService.map((service) => <ServiceCard service={service} />)}
          </CardSection>
        </MainStyled>
      )}

      {userInfo.user_role === 'MANAGER' && (
        <MainStyled>
          <h3 style={{ color: '#056CF9 ' }}>Serviços atrelados a sua Oficina</h3>

          <CardSection>
            {workshopServices.map((service) => <ServiceCard service={service} />)}
          </CardSection>
        </MainStyled>
      )}

      {userInfo.user_role === 'ADMIN' && (
        <MainStyled>
          <h3 style={{ color: '#056CF9 ' }}>Serviços atrelados a sua Oficina</h3>

          <CardSection>
            {workshopServices.map((service) => <ServiceCard service={service} />)}
          </CardSection>
        </MainStyled>
      )}

      <MainStyled>
        <h3 style={{ color: '#056CF9 ' }}>Todos os serviços</h3>

        <CardSection>
          {services.map((service) => <ServiceCard service={service} />)}
        </CardSection>
      </MainStyled>
    </>
  )
}
