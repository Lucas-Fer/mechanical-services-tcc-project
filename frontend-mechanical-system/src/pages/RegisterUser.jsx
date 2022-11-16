import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { SystemContext } from '../context/SystemContext';
import { createUser } from '../services/userRequest';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MainFormStyled,
  SectionButtonStyled,
  SectionInputStyled
} from '../styles/Login.styled';

export default function RegisterUser() {

  const { setUserInfo, userLogged, setUserLogged } = useContext(SystemContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  let history = useHistory();

  const handleSubmit = async () => {
    try {
      const response = await createUser({ name, email, password, phone, address });
      setUserLogged(true);
      setUserInfo(response.data);

    } catch (error) {
      setUserLogged(false);
      alert(error.response.data)

    }
  }

  useEffect(() => {
    if (userLogged) history.push('user/home');
  }, [userLogged])

  return (
    <FormStyled>
      <MainFormStyled>
        <h3 style={{
          textAlign: "center",
          color: "#036B52",
          fontWeight: "bold"
        }}>
          Criar usuário
        </h3>

        <SectionInputStyled>
          <span style={{
            alignSelf: "start",
            color: "gray",
            fontWeight: "bolder"
          }}>Nome</span>

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
          }}>Telefone</span>

          <InputStyled
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          }}>Endereço</span>

          <InputStyled
            type="text"
            name="address"
            placeholder='Rua Exemplo, Bairro Exemplo, Número Exemplo'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            onClick={() => handleSubmit()} type="button">Cadastrar Usuário</ButtonStyled>
        </SectionButtonStyled>
      </MainFormStyled>
    </FormStyled>
  )
}
