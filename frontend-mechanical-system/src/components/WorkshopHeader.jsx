import React, { useContext } from 'react'
import { SystemContext } from '../context/SystemContext';
import { HeaderStyled, LinkStyled, NavBarStyled } from '../styles/WorksopHeader.styled'

export default function WorkshopHeader() {
  const { userInfo } = useContext(SystemContext);

  return (
    <HeaderStyled>
      <NavBarStyled>

        {userInfo.user_role === "ADMIN" ? (
          <LinkStyled borderright to="/workshop/home">Gerenciar Oficina</LinkStyled>
        ) : (
          <LinkStyled borderright to="/workshop/home">Sua Oficina</LinkStyled>
        )}

        <LinkStyled borderright to="/services">Listar Serviços</LinkStyled>
      </NavBarStyled>


      <NavBarStyled>
        {userInfo.user_role === "ADMIN" ? (
          <LinkStyled borderleft to="/workshop/edit">Workshop Admin</LinkStyled>

        ) : (
          <LinkStyled borderleft to="/workshop-employee/home">{userInfo.manager_name}</LinkStyled>
        )}
        <LinkStyled borderleft to="/">Logout</LinkStyled>
      </NavBarStyled>
    </HeaderStyled>
  )
}
