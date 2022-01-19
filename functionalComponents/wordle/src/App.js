import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import WordGuess from './components/WordGuess';

function App() {
  const answer = "tears";
  const [wordGuess, setWordGuess] = useState("");
  const [submittedGuess, setSubmittedGuess] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    // axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordGuess)
    //   .then(res => {
    //     console.log("real word");

    //   })
    //   .catch(err => console.log("not real word"))
    setSubmittedGuess(wordGuess);
  }

  return (
    <div className="App">
      <h1>hey it's me!</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={(event)=>setWordGuess(event.target.value)} maxLength={5} minLength={5}/>
        <input type="submit" value="check word"/>
      </form>

      <WordGuess guess={submittedGuess} answer={answer}/>
    </div>
  );
}

export default App;
