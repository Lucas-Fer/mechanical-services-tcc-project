import styled from "styled-components";

export const TableStyled = styled.table`
  display: flex;
  flex-direction: column;
  
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #343434;
  
  box-shadow: 10px 5px 5px #343434;
  border-radius: 8px;
  
  font-family: sans-serif;
  width: 80%;
  margin: 2rem auto;
`;

export const TRStyled = styled.tr`
  display: flex;
  margin-top: 1rem;
`;

export const THStyled = styled.td`
  display: flex;
  width: 100%;

  padding: 5px;

  ${props => props.sm && `
     width: 5%;
  `};

   ${props => props.md && `
     width: 25%;
  `};

  ${props => props.lg && `
     width: 40%;
  `};

  ${props => props.th && `
     border-bottom: 1px solid gray;
  `};

   ${props => props.btnDelete && `
     border: 1px solid #c50101;
     border-radius: 5px;

     &:hover {
      cursor: pointer;
      background: #aa1616;
      color: white;
     }
  `};

  justify-content: center;
`;
