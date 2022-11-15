import React from 'react'
import { THStyled, TRStyled } from '../styles/WokrshopHome.styled'

export default function ListWorkshopManagers({ managerData, index }) {
  return (
    <TRStyled key={managerData.manager_email}>
      <THStyled lg>{managerData.manager_name}</THStyled>
      <THStyled lg>{managerData.manager_email}</THStyled>
      <THStyled lg>{managerData.user_role}</THStyled>
      <THStyled md>Excluir</THStyled>
    </TRStyled>
  )
}
