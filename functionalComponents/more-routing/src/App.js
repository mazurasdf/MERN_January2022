import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './views/Home';
import Pokemon from './views/Pokemon';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/pokemon/:name">
            <Pokemon/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
