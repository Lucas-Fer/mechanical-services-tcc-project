import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyled } from '../styles/WorksopHeader'

export default function WorkshopHeader() {
  return (
    <HeaderStyled>
      <section>
        <Link to="/workshop/home">Gerenciar Oficina</Link>
        <Link to="/workshop/home">Listar Serviços</Link>
        <Link to="/workshop/home">Listar </Link>
      </section>


      <div>
        <span>Workshop Admin</span>
        <Link to="/">Logout</Link>
      </div>
    </HeaderStyled>
  )
}
