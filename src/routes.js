import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Inicio from './pages/Inicio/index.js';
import PaginaRepositorio from './pages/Repositorio';
import PaginaSeguidores from './pages/Seguidores';
import PaginaSeguindo from './pages/Seguindo';


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Inicio} />
                <Route path='/repositorio' component={PaginaRepositorio} />
                <Route path='/seguidores' component={PaginaSeguidores} />
                <Route path='/seguindo' component={PaginaSeguindo} />
            </Switch>
        </Router>
    );
}