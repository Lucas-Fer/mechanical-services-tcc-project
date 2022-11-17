import React from 'react'
import { THStyled, TRStyled } from '../styles/WokrshopHome.styled'

export default function ListWorkshopMechanicals({ mechanicalData, onDeleteEmployees, userRole }) {
  return (
    <TRStyled key={mechanicalData.mechanical_email}>
      <THStyled lg>{mechanicalData.mechanical_name}</THStyled>
      <THStyled lg>{mechanicalData.mechanical_email}</THStyled>
      <THStyled lg>{mechanicalData.user_role}</THStyled>
      {userRole === "ADMIN" &&
        <THStyled
          onClick={() => onDeleteEmployees(mechanicalData.mechanical_id, 'mechanical')}
          md
          btnDelete
        >Excluir</THStyled>
      }

    </TRStyled>
  )
}
