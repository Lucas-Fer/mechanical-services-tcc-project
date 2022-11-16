import styled from "styled-components";
import { Link } from 'react-router-dom'

export const MainStyled = styled.form`
  display: flex;
  flex-direction: column;
  
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #343434;
  
  box-shadow: 10px 5px 5px #343434;
  border-radius: 8px;
  
  font-family: sans-serif;
  width: 95%;
  margin: 2rem auto;
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 100%;
  margin: 1rem auto;
`;

export const CardItem = styled(Link)`  
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 10px 5px 5px #343434;
  border-radius: 8px;
  background: #B1C2BE;

  width: 49%;
  height: 7rem;
  margin: 1rem 0;

  text-decoration: none;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: white;
  border: 1px solid #B1C2BE;
  border-radius: 6px;

  height: 99%;
  width: 25%;
  margin-left: -5px;
  
  color: black;
  font-weight: bolder;
`;

export const CardItemStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bolder;

  border: 1px solid #B1C2BE;
  border-radius: 6px;

  height: 80%;
  width: 35%;

  color: white;

  ${props => props.open && `
    background: #66CC00;
  `}

  ${props => !props.open && `
    background: #00CC9B;
  `}
`;

export const CardItemWorkshop = styled.div`
  width: 35%;
  height: 99%;
  color: #036B52;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;