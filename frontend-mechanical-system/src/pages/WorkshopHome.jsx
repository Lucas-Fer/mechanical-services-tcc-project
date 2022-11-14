import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import ListWorkshopManagers from '../components/ListWorkshopManagers';
import ListWorkshopMechanicals from '../components/ListWorkshopMechanicals';
import RegisterEmployeeWorkshop from '../components/RegisterEmployeeWorkshop';
import WorkshopHeader from '../components/WorkshopHeader'
import { SystemContext } from '../context/SystemContext';
import { getAllWorkshopManagers, getAllWorkshopMechanicals } from '../services/workshopRequest';

import { TableStyled, THStyled, TRStyled } from '../styles/WokrshopHome.styled';

export default function WorkshopHome() {

  const { userInfo, userLogged } = useContext(SystemContext);

  let history = useHistory();

  const [workshopManagers, setWorkshopManagers] = useState([]);
  const [workshopMechanicals, setWorkshopMechanicals] = useState([]);

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

  useEffect(() => {
    if (!userInfo || !userLogged) history.push('/');
    getWorkshopEmployees(userInfo.workshop_id);
  }, []);

  return (
    <>
      <WorkshopHeader />
      <RegisterEmployeeWorkshop />
      <TableStyled>
        <h2 style={{ color: 'gray' }}>Funcionários da Oficina</h2>
        <thead>
          <TRStyled>
            <THStyled th sm>#</THStyled>
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
            index={index + 1}
          />)}
        </tbody>
      </TableStyled>
    </>
  )
}
