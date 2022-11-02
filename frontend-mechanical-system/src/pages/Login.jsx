import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';

import { SystemContext } from '../context/SystemContext';
import { getAllUser, loginUser } from '../services/userRequest';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MainFormStyled,
  SectionButtonStyled,
  SectionInputStyled
} from '../styles/Login.styled';

export default function Login() {

  const { setUserInfo, userInfo } = useContext(SystemContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogged, setUserLogged] = useState(false);

  let history = useHistory();

  const handleSubmit = async () => {
    try {
      const response = await loginUser({ email, password });
      setUserLogged(true);
      setUserInfo(response.data);

      console.log(userInfo);
    } catch (error) {
      setUserLogged(false);
      alert(error.response.data)
    }
  }


  const handleClick = (routeParam) => history.push(`/${routeParam}`);

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
          }}>Login</span>

          <InputStyled
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </SectionInputStyled>

        <SectionInputStyled>
          <span style={{
            alignSelf: "start",
            color: "gray",
            fontWeight: "bolder"
          }}>Senha</span>

          <InputStyled
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </SectionInputStyled>

        <SectionButtonStyled>
          <ButtonStyled
            primary
            onClick={() => handleSubmit()}
            type="button">Entrar</ButtonStyled>

          <ButtonStyled
            secondary
            onClick={() => handleClick("register-user")}
            type="button">Criar conta</ButtonStyled>

          <ButtonStyled
            terciary
            type="button">Registrar oficina</ButtonStyled>
        </SectionButtonStyled>
      </MainFormStyled>
    </FormStyled>
  )
}
