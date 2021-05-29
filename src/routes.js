import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PaginaRepositorio from './pages/Repositorio';
import PaginaSeguidores from './pages/Seguidores';
import PaginaSeguindo from './pages/Seguindo';
import PaginaInicio from './pages/Inicio';
import Footer from './components/Footer';


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/inicio' component={PaginaInicio} />
                <Route path='/repositorio' component={PaginaRepositorio} />
                <Route path='/seguidores' component={PaginaSeguidores} />
                <Route path='/seguindo' component={PaginaSeguindo} />
            </Switch>
            <Footer />
        </Router>
    );
}