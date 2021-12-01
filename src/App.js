import React, { useState } from 'react'
import axios from 'axios'
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

  // Search for OnKeyPress, fetching data based on what was typed in {query}
  const search = evt => {
    // If "Enter" key event is pressed... get response (weather data) based on query
    if (evt.key === "Enter") {
      axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(response => {
          setQuery('');
          setWeather(response.data);
          console.log(response.data);
        })

        // Catch error if a non existent location is entered along with an alert
        .catch(error => {
          console.log(error)
          alert("Oops! No location found...")
        });
    }
  }

  return (
    <div className={
      (typeof weather.main != "undefined") 
      ? ((weather.main.temp > 16)
      ? 'app warm' 
      : 'app') 
      : 'app'}>
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
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
