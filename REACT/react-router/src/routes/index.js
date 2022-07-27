import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contato from '../pages/Contato'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contato/:nome' component={Contato} />
        </Switch>
    )
}

export default Routes 