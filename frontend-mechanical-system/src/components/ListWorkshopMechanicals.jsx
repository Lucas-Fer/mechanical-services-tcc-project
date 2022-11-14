import React from 'react'
import { THStyled, TRStyled } from '../styles/WokrshopHome.styled'

export default function ListWorkshopMechanicals({ mechanicalData, index }) {
  return (
    <TRStyled key={mechanicalData.mechanical_email}>
      <THStyled sm>{index}</THStyled>
      <THStyled lg>{mechanicalData.mechanical_name}</THStyled>
      <THStyled lg>{mechanicalData.mechanical_email}</THStyled>
      <THStyled lg>{mechanicalData.user_role}</THStyled>
      <THStyled md><button>Excluir</button></THStyled>
    </TRStyled>
  )
}
