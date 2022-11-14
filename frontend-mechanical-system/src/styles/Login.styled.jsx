import styled from 'styled-components'

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const MainFormStyled = styled.main`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  margin-top: 2.625em;
  width: 26.56em;
  height: 27.75em;

  border-radius: 3px;
  background: #B1C2BE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SectionInputStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  width: 80%;
`;

export const InputStyled = styled.input`
  height: 2.75em;
  
  border: 2px solid #036B52;
  border-radius: 3px;

  padding-left: 1em;
  font-weight: lighter;
  width: 100%;
`;

export const SectionButtonStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #036B52;
  
  margin: 0.25em 0em;
  padding: 0.25em 1em;

  width: 80%;
  height: 3.6875em;

  font-weight: 700;
   
 &:hover {
    background: transparent;
    cursor: pointer;
  }

   ${props => props.primary && `
      background: #036B52;
      color: #FFFFFF;
  `};

  ${props => props.secondary && `
      background: #FFFFFF;
      color: #036B52;
  `};

  ${props => props.terciary && `
      background: #056CF9;
      color: #FFFFFF;
  `};

   ${props => props.primaryWorkshop && `
      &:hover {
      background: #036B52;
      color: #FFFFFF;
      cursor: pointer;
  }
  `};
`;

export const SelectStyled = styled.select`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #036B52;
  
  margin: 0.25em 0em;
  padding: 0.25em 1em;
  background: #FFFFFF;
  color: #036B52;
  width: 106%;
  height: 3.6875em;

  font-weight: 700;

  &:hover {
    background: transparent;
    cursor: pointer;
  }
`;

export const OptionStyled = styled.option`
  font-weight: 700;
`;