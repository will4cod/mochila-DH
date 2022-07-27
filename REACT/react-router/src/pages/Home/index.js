import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>{

    const nome = 'William'

    return(
        <>
        <h1>Home</h1>
        <Link to={`/contato/${nome}`}>Contato</Link>
        </>
    )
}

export default Home