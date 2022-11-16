import React, { useContext, useEffect, useState } from 'react'
import ServiceCard from '../components/ServiceCard';
import UserHeader from '../components/UserHeader'
import WorkshopHeader from '../components/WorkshopHeader'
import { SystemContext } from '../context/SystemContext';
import { getAllServices } from '../services/serviceRequest';
import { MainStyled, CardSection } from '../styles/Service.styled';

export default function Services() {
  const { userInfo } = useContext(SystemContext);
  const [services, setServices] = useState([]);
  const getServices = async () => {
    try {
      const { data } = await getAllServices();
      setServices(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      {userInfo.user_role === 'CLIENT' ? <UserHeader /> : <WorkshopHeader />}
      <MainStyled>
        <h3 style={{ color: '#056CF9 ' }}>Todos os serviços</h3>

        <CardSection>
          {services.map((service) => <ServiceCard service={service} />)}
        </CardSection>
      </MainStyled>
    </>
  )
}
