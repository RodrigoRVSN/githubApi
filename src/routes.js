import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import React from 'react';

import HomePage from './pages/HomePage';
import ReposPage from './pages/ReposPage';
import FollowersPage from './pages/FollowersPage';
import FollowingPage from './pages/FollowingPage';
import OtherUserPage from './pages/OtherUser';
import Login from './pages/Login';

import Footer from './components/Footer';
import { isLogged } from './providers/isLogged';


const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route
        {...rest}
        render={props =>
            isLogged() ? (
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
                <PrivateRoute path='/inicio' component={HomePage} />
                <PrivateRoute path='/repositorio' component={ReposPage} />
                <PrivateRoute path='/seguidores' component={FollowersPage} />
                <PrivateRoute path='/seguindo' component={FollowingPage} />
                <PrivateRoute path='/outrousuario' component={OtherUserPage} />
            </Switch>
            <Footer />
        </Router>
    );
}