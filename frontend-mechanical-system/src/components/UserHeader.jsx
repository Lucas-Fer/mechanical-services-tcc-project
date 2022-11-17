import React, { useContext } from 'react'
import { SystemContext } from '../context/SystemContext'
import { HeaderStyled, LinkStyled, NavBarStyled } from '../styles/WorksopHeader.styled'

export default function UserHeader() {
  const { userInfo } = useContext(SystemContext);

  return (
    <HeaderStyled>
      <NavBarStyled>
        <LinkStyled borderright to="/user/home">Home</LinkStyled>
        <LinkStyled borderright to="/services">Serviços</LinkStyled>
      </NavBarStyled>


      <NavBarStyled>
        <LinkStyled borderleft to="/user/edit">{userInfo.user_name}</LinkStyled>
        <LinkStyled borderleft to="/">Logout</LinkStyled>
      </NavBarStyled>
    </HeaderStyled>
  )
}
