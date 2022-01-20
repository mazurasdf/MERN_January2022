import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BigState from './contexts/BigState';
import Display from './components/Display';
import Form from './components/Form';
import { useState } from 'react';
import ReduceMe from './components/ReduceMe';

function App() {
  const [form, setForm] = useState("test data");
  const [state, setState] = useState("other state");

  return (
    <div className="App">
      <BigState.Provider value={{form, setForm, state}}>
        {/* <Form/>
        <Display/> */}
        <ReduceMe/>
      </BigState.Provider>
    </div>
  );
}

export default App;
