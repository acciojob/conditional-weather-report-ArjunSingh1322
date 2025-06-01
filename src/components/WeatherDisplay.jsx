import React from "react";

const WeatherDisplay = (props) => {
  const temperature = props.obj.temperature;
  const condition = props.obj.conditions;

let styling = temperature > 20 ? { color: "red" } : { color: "blue" };


return(

    <div>
        <p>Temprature:<span style={styling}>{temperature}</span></p>
        <p>Condition:{condition}</p>
    </div>
)


}

export default WeatherDisplay;
