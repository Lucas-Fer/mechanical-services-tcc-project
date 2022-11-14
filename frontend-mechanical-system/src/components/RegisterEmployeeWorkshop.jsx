import React, { useState } from 'react'
import { ButtonStyled } from '../styles/Login.styled'
import { DivInputStyled, FormStyled, InputStyled, OptionStyled, SectionInputStyled, SelectStyled } from '../styles/RegisterEmployeeWorkshop'

export default function RegisterEmployeeWorkshop() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [roleOptionSelected, setRoleOptionSelected] = useState('mechanical');

  const options = [
    {
      label: "Mecânico",
      value: "mechanical",
    },
    {
      label: "Gerente",
      value: "manager",
    },
  ];

  return (
    <FormStyled>
      <div>
        <h2 style={{ color: 'gray' }}>Registrar funcionários</h2>
      </div>

      <SectionInputStyled>
        <DivInputStyled>
          <h3 style={{ color: 'green' }}>Nome</h3>
          <InputStyled
            value={name}
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </DivInputStyled>

        <DivInputStyled>
          <h3 style={{ color: 'green' }}>Email</h3>
          <InputStyled
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DivInputStyled>

        <DivInputStyled>
          <h3 style={{ color: 'green' }}>Senha</h3>
          <InputStyled
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DivInputStyled>

        <DivInputStyled>
          <h3 style={{ color: 'green' }}>Tipo</h3>
          <SelectStyled
            value={roleOptionSelected}
            onChange={(e) => setRoleOptionSelected(e.target.value)}>

            {options.map((option) => (
              <OptionStyled
                value={option.value}
                key={option.label}
              >{option.label}</OptionStyled>
            ))}
          </SelectStyled>
        </DivInputStyled>

        <DivInputStyled>
          <ButtonStyled primaryWorkshop>Cadastrar</ButtonStyled>
        </DivInputStyled>
      </SectionInputStyled>
    </FormStyled>
  )
}
