import React from 'react'
import axios from 'axios'
import './App.css';
import './index.css'

const api = {
  key: "669c77631b8568499d0c85579429ce59",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  let today = new Date().toDateString();

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location">Toronto, ON</div>
          <div className="date">{today}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15°c
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
