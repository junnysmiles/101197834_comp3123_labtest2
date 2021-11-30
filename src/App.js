import React, { useState } from 'react'
import './App.css';
import './index.css'

// Setting const with my API key and base url
const api = {
  key: "669c77631b8568499d0c85579429ce59",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  // Setting Today's Date using Date() library
  let today = new Date().toDateString();

  // Setting Query for Search, and Weather for data
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState("");

  // Search for OnKeyPress, fetching dating based on what was typed in {query}
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('');
          setWeather(result);
          console.log(result);
        });
    }
  }

  /*getWeatherData = () => {
    axios.get("")
  }*/

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{today}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
