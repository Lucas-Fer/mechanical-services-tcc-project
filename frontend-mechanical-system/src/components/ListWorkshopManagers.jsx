import React from 'react'
import { THStyled, TRStyled } from '../styles/WokrshopHome.styled'

export default function ListWorkshopManagers({ managerData, onDeleteEmployees, userRole }) {
  return (
    <TRStyled key={managerData.manager_email}>
      <THStyled lg>{managerData.manager_name}</THStyled>
      <THStyled lg>{managerData.manager_email}</THStyled>
      <THStyled
        type
        lg>
        {managerData.user_role}
      </THStyled>

      {userRole === "ADMIN" &&
        <THStyled
          onClick={() => onDeleteEmployees(managerData.manager_id, 'manager')}
          md
          btnDelete
        >Excluir</THStyled>
      }


    </TRStyled>
  )
}
