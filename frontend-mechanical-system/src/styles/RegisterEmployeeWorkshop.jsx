import styled from "styled-components";

export const FormStyled = styled.form`
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

export const SectionInputStyled = styled.section`
  display: flex;
  flex-direction: row;
`;

export const DivInputStyled = styled.div`
  width: 100%;

  padding-left: 1rem;
`;

export const InputStyled = styled.input`
  height: 2rem;
  margin-top: -1rem;
  width: 90%;
`;

export const SelectStyled = styled.select`
  border-radius: 3px;
  margin-top: -1rem;

  width: 90%;
  height: 2.4rem;

  &:hover {
    background: transparent;
    cursor: pointer;
  }
`;

export const OptionStyled = styled.option`
  font-weight: 700;
`;


