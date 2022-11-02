import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5rem;
  width: 100%;
  background: #036B52;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;

export const NavBarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  width: 20%;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  color: #FFFFFF;
  text-decoration: none;
  

  &:hover, &:focus {
    background: #2FC18C;
    color: #001813;
  }

  ${props => props.borderright && `
      border-right: 1px solid #B1C2BE;
  `};

  ${props => props.borderleft && `
      border-left: 1px solid #B1C2BE;
  `};
`;