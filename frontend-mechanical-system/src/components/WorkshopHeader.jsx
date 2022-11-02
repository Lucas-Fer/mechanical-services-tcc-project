import React from 'react'
import { HeaderStyled, LinkStyled, NavBarStyled } from '../styles/WorksopHeader.styled'

export default function WorkshopHeader() {
  return (
    <HeaderStyled>
      <NavBarStyled>
        <LinkStyled borderright to="/workshop/home">Gerenciar Oficina</LinkStyled>
        <LinkStyled borderright to="/workshop/home">Listar Serviços</LinkStyled>
      </NavBarStyled>


      <NavBarStyled>
        <LinkStyled borderleft to="/workshop/home">Workshop Admin</LinkStyled>
        <LinkStyled borderleft to="/">Logout</LinkStyled>
      </NavBarStyled>
    </HeaderStyled>
  )
}
