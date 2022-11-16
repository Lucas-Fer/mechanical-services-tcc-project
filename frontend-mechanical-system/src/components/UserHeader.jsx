import React from 'react'
import { HeaderStyled, LinkStyled, NavBarStyled } from '../styles/WorksopHeader.styled'

export default function UserHeader() {
  return (
    <HeaderStyled>
      <NavBarStyled>
        <LinkStyled borderright to="/user/home">Home</LinkStyled>
        <LinkStyled borderright to="/user/home">Meus Serviços</LinkStyled>
      </NavBarStyled>


      <NavBarStyled>
        <LinkStyled borderleft to="/user/home">Meu nome</LinkStyled>
        <LinkStyled borderleft to="/">Logout</LinkStyled>
      </NavBarStyled>
    </HeaderStyled>
  )
}
