import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import ListWorkshopManagers from '../components/ListWorkshopManagers';
import ListWorkshopMechanicals from '../components/ListWorkshopMechanicals';
import RegisterEmployeeWorkshop from '../components/RegisterEmployeeWorkshop';
import WorkshopHeader from '../components/WorkshopHeader'
import { SystemContext } from '../context/SystemContext';
import { createNewManager, createNewMechanical, getAllWorkshopManagers, getAllWorkshopMechanicals } from '../services/workshopRequest';

import { TableStyled, THStyled, TRStyled } from '../styles/WokrshopHome.styled';

export default function WorkshopHome() {

  const { userInfo, userLogged } = useContext(SystemContext);

  let history = useHistory();

  const [workshopManagers, setWorkshopManagers] = useState([]);
  const [workshopMechanicals, setWorkshopMechanicals] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    roleOptionSelected: 'mechanical',
  });

  const handleChange = ({ target: { value, name } }) => {
    setUserData((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const getWorkshopEmployees = async (workshopId) => {
    try {
      const managersResponse = await getAllWorkshopManagers(workshopId.toString());
      const mechanicalsResponse = await getAllWorkshopMechanicals(workshopId.toString());

      setWorkshopManagers(managersResponse.data);
      setWorkshopMechanicals(mechanicalsResponse.data);

    } catch (error) {
      console.log(error.response.data)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.roleOptionSelected === 'mechanical') {
      try {
        const data = await createNewMechanical(userData, userInfo.workshop_id);
        getWorkshopEmployees(userInfo.workshop_id);
        console.log(data);
      } catch (error) {
        alert(error.response.data);
      }
    }

    if (userData.roleOptionSelected === 'manager') {
      try {
        const data = await createNewManager(userData, userInfo.workshop_id);
        getWorkshopEmployees(userInfo.workshop_id);
        console.log(data);
      } catch (error) {
        alert(error.response.data);
      }
    }
  }

  useEffect(() => {
    if (!userInfo || !userLogged) history.push('/');
    getWorkshopEmployees(userInfo.workshop_id);
  }, []);



  return (
    <>
      <WorkshopHeader />
      <RegisterEmployeeWorkshop
        handleSubmit={handleSubmit}
        userData={userData}
        handleChange={handleChange}
      />
      <TableStyled>
        <h2 style={{ color: 'gray' }}>Funcionários da Oficina</h2>
        <thead>
          <TRStyled>
            <THStyled th lg>Name</THStyled>
            <THStyled th lg>Email</THStyled>
            <THStyled th lg>Cargo</THStyled>
            <THStyled th md>Ação</THStyled>
          </TRStyled>
        </thead>

        <tbody>
          {workshopManagers.map((manager, index) => <ListWorkshopManagers
            managerData={manager}
            index={index}
          />)}

          {workshopMechanicals.map((mechanical, index) => <ListWorkshopMechanicals
            mechanicalData={mechanical}
            index={index}
          />)}
        </tbody>
      </TableStyled>
    </>
  )
}
