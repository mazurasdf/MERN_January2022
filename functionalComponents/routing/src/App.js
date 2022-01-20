import './App.css';
import Home from './views/Home';
import Second from './views/Second';
import Form from './views/Form';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="d-flex justify-content-between w-50 mx-auto" id="header">
          <Link to="/">Main</Link>
          <Link to="/form">Form</Link>
          <Link to="/second/bigpig/hotpink">L A R G E P I G</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/second/:word/:color">
            <Second/>
          </Route>
          <Route exact path="/form">
            <Form/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
