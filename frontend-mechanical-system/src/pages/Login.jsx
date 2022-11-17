import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import { SystemContext } from '../context/SystemContext';
import { loginManager } from '../services/managerRequest';
import { getAllUser, loginUser } from '../services/userRequest';
import { loginWorkshop } from '../services/workshopRequest';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MainFormStyled,
  OptionStyled,
  SectionButtonStyled,
  SectionInputStyled,
  SelectStyled
} from '../styles/Login.styled';

export default function Login() {

  const { setUserInfo, setUserLogged } = useContext(SystemContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleOptionSelected, setRoleOptionSelected] = useState('user');

  const options = [
    {
      label: "Usuário padrão",
      value: "user",
    },
    {
      label: "Oficina (ADMIN)",
      value: "workshop",
    },
    {
      label: "Mecânico de uma oficina",
      value: "mechanical",
    },
    {
      label: "Gerente de uma oficina",
      value: "manager",
    },
  ];

  let history = useHistory();

  const handleSubmit = async () => {
    if (roleOptionSelected === 'user') {
      try {
        const response = await loginUser({ email, password });
        setUserLogged(true);
        setUserInfo(response.data);
        history.push('/user/home');
      } catch (error) {
        setUserLogged(false);
        alert(error.response.data)
      }
    }

    if (roleOptionSelected === 'workshop') {
      try {
        const response = await loginWorkshop({ email, password });
        setUserLogged(true);
        setUserInfo(response.data);
        history.push('/workshop/home')
      } catch (error) {
        setUserLogged(false);
        alert(error.response.data)
      }
    }

    if (roleOptionSelected === 'manager') {
      try {
        const response = await loginManager({ email, password });
        setUserLogged(true);
        setUserInfo(response.data);
        history.push('/services')
      } catch (error) {
        setUserLogged(false);
        alert(error.response.data)
      }
    }
  }

  useEffect(() => {
    setUserLogged(false);
    setUserInfo();
  }, []);

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

        <SectionInputStyled>
          <span style={{
            alignSelf: "start",
            color: "gray",
            fontWeight: "bolder"
          }}>Entrar como:</span>

          <SelectStyled value={roleOptionSelected}
            onChange={(e) => setRoleOptionSelected(e.target.value)}
          >
            {options.map((option) => (
              <OptionStyled
                value={option.value}
                key={option.label}
              >{option.label}</OptionStyled>
            ))}
          </SelectStyled>
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
            onClick={() => handleClick("register-workshop")}
            type="button">Registrar oficina</ButtonStyled>
        </SectionButtonStyled>
      </MainFormStyled>
    </FormStyled>
  )
}
