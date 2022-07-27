import React from 'react'
import { Link } from 'react-router-dom'

const Contato = ({match}) =>{

    return(
        <>
        <h1>Contato: {match.params.nome} </h1>

        <Link to='/'>  Voltar para home </Link>

        </>
    )
}

export default Contato