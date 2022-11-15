import React from 'react'

import { ButtonStyled } from '../styles/Login.styled'
import { DivInputStyled, FormStyled, InputStyled, OptionStyled, SectionInputStyled, SelectStyled } from '../styles/RegisterEmployeeWorkshop'


export default function RegisterEmployeeWorkshop({
  handleSubmit,
  userData,
  handleChange
}) {

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
    <FormStyled onSubmit={handleSubmit}>
      <div>
        <h2 style={{ color: 'gray' }}>Registrar funcionários</h2>
      </div>

      <SectionInputStyled>
        <DivInputStyled>
          <h3 style={{ color: 'green' }}>Nome</h3>
          <InputStyled
            value={userData.name}
            type="text"
            name="name"
            onChange={handleChange}
          />
        </DivInputStyled>

        <DivInputStyled>
          <h3 style={{ color: 'green' }}>Email</h3>
          <InputStyled
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </DivInputStyled>

        <DivInputStyled>
          <h3 style={{ color: 'green' }}>Senha</h3>
          <InputStyled
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </DivInputStyled>

        <DivInputStyled>
          <h3 style={{ color: 'green' }}>Tipo</h3>
          <SelectStyled
            value={userData.roleOptionSelected}
            onChange={handleChange}
            name="roleOptionSelected"
          >

            {options.map((option) => (
              <OptionStyled
                value={option.value}
                key={option.label}
              >{option.label}</OptionStyled>
            ))}
          </SelectStyled>
        </DivInputStyled>

        <DivInputStyled>
          <ButtonStyled
            primaryWorkshop
            type="submit"
          >Cadastrar
          </ButtonStyled>
        </DivInputStyled>
      </SectionInputStyled>
    </FormStyled>
  )
}
