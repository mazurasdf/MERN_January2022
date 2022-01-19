import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [city, setCity] = useState("cleveland");

  useEffect(()=>{
    console.log("running use effect again");
    axios.get("https://api.openbrewerydb.org/breweries?by_city="+city)
      .then(res => {
            console.log(res);
            setBreweries(res.data);
          })
      .catch(err => console.log(err))
  },[city])

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // fetch("https://api.openbrewerydb.org/breweries?by_city="+city)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     setBreweries(res);
    //   })
    //   .catch(err => console.log(err))
    axios.get("https://api.openbrewerydb.org/breweries?by_city="+city)
      .then(res => {
            console.log(res);
            setBreweries(res.data);
          })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>search for breweries!</h1>
      <form onSubmit={onSubmitHandler}>
        {/* <input type="text" onChange={(event) => setCity(event.target.value)}/> */}
        <select onChange={(event) => setCity(event.target.value)}>
          <option value="cleveland">cleveland</option>
          <option value="chicago">chicago</option>
          <option value="nashville">nashville</option>
          <option value="boston">boston</option>
          <option value="canton">canton</option>
        </select>
        {/* <button type="submit" className='btn btn-lg btn-success'>click me!</button> */}
      </form>

      <ul>
      {
        breweries.map((brewery, i) => {
          return <li key={i}><a href={brewery.website_url}>{brewery.name}</a></li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
