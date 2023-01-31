import {useState, useEffect} from "react";
import axios from "axios";
import './App.css'
// import SearcherBar from "./components/SearcherBar/Searchbar";



function App() {
const [countries, setCountries] = useState([])

const [search, setSearch] = useState('')


const handleEvents=event=>{
    setSearch(event.target.value)
  }



const filteredCountries = countries.filter(country =>{
return country.name.official.toLowerCase().includes(search.toLowerCase())
})

useEffect(()=>{
axios.get('https://restcountries.com/v3.1/all/')
.then((res) => setCountries(res.data))

},[])





  return (
    <div>
        <div>
        <form >
            <input type="text"
          value={search}
          onChange={handleEvents} ></input>
                <button type="submit"></button>
        </form>
    </div>
      




    <ul className="newslist">
      {filteredCountries.map((country, index) =>(
        <li key={index} className="news-item list">
          <a href={country.maps.googleMaps} className="headers">
          <img src={country.flags.png} alt={country.flags.alt} className="img" />
          <h2>{country.name.official}</h2>
          <b>Population:{country.population}</b>
          <p>Capital:{country.capital}</p>
          <p>Continents:{country.continents}</p>
          
          </a>
          
        </li>))}
    </ul>
    
    </div>
   
    
  
    
  );
}

export default App;
