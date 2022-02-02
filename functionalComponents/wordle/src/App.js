import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import SubmittedGuess from './components/SubmittedGuess';
import InputGuess from './components/InputGuess';

function App() {
  const answer = "tears";
  const [submittedGuesses, setSubmittedGuesses] = useState([]);

  

  return (
    <div className="App">
      <h1>hey it's me!</h1>
      <InputGuess setSubmittedGuesses={setSubmittedGuesses}/>

      {
        submittedGuesses.map((guess,i)=>
          <SubmittedGuess guess={guess} answer={answer}/>
        )
      }
    </div>
  );
}

export default App;
