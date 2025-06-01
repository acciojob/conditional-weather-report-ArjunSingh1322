
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

let obj = { temperature: 25, conditions: "Sunny" }
const App = () => {
  return (
    <div>
        <WeatherDisplay obj={obj}/>
    </div>
  )
}

export default App
