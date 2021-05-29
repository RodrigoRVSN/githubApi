import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Routes from './routes';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Routes />
        </Switch>
      </Router>
    </>
  );
}

export default App;
