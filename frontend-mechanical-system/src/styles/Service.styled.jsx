import styled from "styled-components";
import { Link } from 'react-router-dom'

export const MainStyled = styled.form`
  display: flex;
  flex-direction: column;
  
  margin-top: 2rem;
  padding: 1rem;
  border: 2px solid #343434;
  
  box-shadow: 10px 5px 5px #343434;
  border-radius: 8px;
  font-family: sans-serif;
  width: 95%;
  margin: 2rem auto;

  ${props => props.md && `
    width: 55%;
  ` }
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

  box-shadow: 10px 10px 10px 5px #343434;
  border-radius: 8px;
  background: white;
  border: 1px solid transparent;

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

  background: #056CF9;
  border: 1px solid #B1C2BE;
  border-radius: 6px;

  height: 99%;
  width: 25%;
  margin-left: -5px;
  
  color: white;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const DetailServiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const DetailServiceMain = styled.main`
  border: 1px solid #B1C2BE;
  border-radius: 6px;

  width: 70%;
  padding: 1rem;
  margin: 1rem auto;
  font-family: sans-serif;
  color: gray;
  font-weight: bolder;
`;

export const DetailServiceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnChangeStatusService = styled.input`
  text-decoration: none;
  background: none ;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  
  &:hover {
    background: #036B52;
    color: #FFFFFF;
    cursor: pointer;
  };

 ${props => props.disabled && `
     &:hover {
      background: none;
      color: gray;
      cursor: auto;
    }
  `}

  ${props => props.delete && `
   border: 1px solid #c50101;
   border-radius: 5px;
  
    &:hover {
     cursor: pointer;
     background: #aa1616;
     color: white;
   }
  `}

  ${props => props.edit && `
    border: 1px solid #036B52;
    border-radius: 5px;
    margin-right: 5px;

      &:hover {
      background: #036B52;
      color: #FFFFFF;
      cursor: pointer;
    }
  `};
`;

export const SectionStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;