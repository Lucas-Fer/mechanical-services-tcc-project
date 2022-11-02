import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { SystemContext } from '../context/SystemContext';
import { createWorkshop } from '../services/workshopRequest';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MainFormStyled,
  SectionButtonStyled,
  SectionInputStyled
} from '../styles/Login.styled';

export default function RegisterWorkshop() {

  const { setUserInfo, userInfo } = useContext(SystemContext);

  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [userLogged, setUserLogged] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await createWorkshop({ name, email, password, location });
      setUserLogged(true);
      setUserInfo(response.data);

    } catch (error) {
      setUserLogged(false);
      alert(error.response.data)

    }
  }

  useEffect(() => {
    if (userLogged) history.push('/home');
  }, [userLogged])

  return (
    <FormStyled>
      <MainFormStyled>
        <h3 style={{
          textAlign: "center",
          color: "#036B52",
          fontWeight: "bold"
        }}>
          Registrar Oficina
        </h3>

        <SectionInputStyled>
          <span style={{
            alignSelf: "start",
            color: "gray",
            fontWeight: "bolder"
          }}>Nome da Oficina</span>

          <InputStyled
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </SectionInputStyled>

        <SectionInputStyled>
          <span style={{
            alignSelf: "start",
            color: "gray",
            fontWeight: "bolder"
          }}>Localização</span>

          <InputStyled
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </SectionInputStyled>

        <SectionInputStyled>
          <span style={{
            alignSelf: "start",
            color: "gray",
            fontWeight: "bolder"
          }}>Email</span>

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
          <ButtonStyled primary
            onClick={() => handleSubmit()} type="button">Cadastrar Oficina</ButtonStyled>
        </SectionButtonStyled>
      </MainFormStyled>
    </FormStyled>
  )
}
