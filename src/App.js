import React from 'react'
import axios from 'axios'
import './App.css';
import './index.css'

const api = {
  key: "669c77631b8568499d0c85579429ce59",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
