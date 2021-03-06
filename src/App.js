/**
 * Lab Test 2 - Full Stack Development
 * Jun Yan Gan (101197834)
 */

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
      // Using JQuery to input base url, along with search query of city and api key
      axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        // Set response to retrieve data
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

  // Setting onChange to set query of what was typed in
  // Setting the value as the query
  // Using search method for onKeyPress to result in retrieving data based on query
  // Using Math.round to round degrees to closest 10

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
            <div className="icon-box">
              <img className="icon" alt="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}??c
                <div className="feels-like">Feels like {Math.round(weather.main.feels_like)}??c</div>
              </div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
            <div className="extra-data">
              <div className="first">
                <div>Min: {Math.round(weather.main.temp_min)}??c</div>
                <div>Humidity: {Math.round(weather.main.humidity)}%</div>
                <div>Wind Direction: {weather.wind.deg}??</div>
              </div>
              <div className="second">
                <div>Max: {Math.round(weather.main.temp_max)}??c</div>
                <div>Air Pressure: {weather.main.pressure}hPa</div>
                <div>Wind Speed: {weather.wind.speed}m/s</div>
              </div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
