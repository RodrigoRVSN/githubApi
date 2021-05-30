import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import React from 'react';

import PaginaRepositorio from './pages/Repositorio';
import PaginaSeguidores from './pages/Seguidores';
import PaginaSeguindo from './pages/Seguindo';
import PaginaInicio from './pages/Inicio';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useAuth } from './providers/auth';
import { EstaLogado } from './providers/EstaLogado';
import PaginOutroUsuario from './pages/OutroUsuario';


const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route
        {...rest}
        render={props =>
            EstaLogado() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <PrivateRoute path='/inicio' component={PaginaInicio} />
                <PrivateRoute path='/repositorio' component={PaginaRepositorio} />
                <PrivateRoute path='/seguidores' component={PaginaSeguidores} />
                <PrivateRoute path='/seguindo' component={PaginaSeguindo} />
                <PrivateRoute path='/outrousuario' component={PaginOutroUsuario} />
            </Switch>
            <Footer />
        </Router>
    );
}