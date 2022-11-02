import React, { useContext, useEffect } from 'react'

import { SystemContext } from '../context/SystemContext';
import { getAllUser } from '../services/userRequest';

import { ButtonStyled, FormStyled, InputStyled, MainFormStyled, SectionButtonStyled, SectionInputStyled } from '../styles/Login.styled';

export default function Login() {
  const { setAllUsers, allUsers } = useContext(SystemContext);


  const updateAllUsers = async () => {
    const { data } = await getAllUser();
    setAllUsers(data);
  }

  useEffect(() => updateAllUsers(), []);

  return (
    <FormStyled>
      <MainFormStyled>
        <h3 style={{
          textAlign: "center",
          color: "#036B52",
          fontWeight: "bold"
        }}>
          Bem-vindo(a)!
        </h3>
        <SectionInputStyled>
          <span style={{
            alignSelf: "start",
            color: "gray",
            fontWeight: "bolder"
          }}>Email</span>
          <InputStyled type="text" />
        </SectionInputStyled>

        <SectionInputStyled>
          <span style={{
            alignSelf: "start",
            color: "gray",
            fontWeight: "bolder"
          }}>Senha</span>
          <InputStyled type="text" />
        </SectionInputStyled>

        <SectionButtonStyled>
          <ButtonStyled primary>Login</ButtonStyled>
          <ButtonStyled secondary>Criar conta</ButtonStyled>
          <ButtonStyled terciary>Registrar oficina</ButtonStyled>
        </SectionButtonStyled>
      </MainFormStyled>
    </FormStyled>
  )
}
