import React from "react";
import { PiThermometerCold } from "react-icons/pi";

import { LuDroplets } from "react-icons/lu";

import { LuWind } from "react-icons/lu";
import { BsSpeedometer2 } from "react-icons/bs";

export default function Result(props) {
  const { result } = props;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  // let time = d.toLocaleTimeString();
  let day = weekday[d.getDay()];

  var dd = d.getDate();
  var mm = month[d.getMonth()];
  var yyyy = d.getFullYear();
  var date = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();



  return (
    <>
      <div className="container">
        <div className="head">
          <p>Weatherman</p>
        </div>
        <div className="city-name">
          <h3>
            {result.name},{result?.sys?.country}
          </h3>
          <p>
            {day}, {date}
          </p>
        </div>
        <div className="temp">
          <h1>
            {Math.floor(result?.main?.temp)} <span>°c</span>
          </h1>
          {/* {`${result?.weather[0].description}`} */}
          <p>{result?.weather[0]['description']}</p>
        </div>
        <div className="line"></div>
       
        <h4>Weather Details</h4>
        <div className="info">
          <div className="details">
          < PiThermometerCold />

            <h4>{result?.main?.feels_like}</h4>
            
            <p>Feels like</p>
          </div>
          <div className="details">
            <LuDroplets/>
            <h4>{result?.main?.humidity} %</h4>
            <p>Humidity</p>
          </div>
          <div className="details">
            <LuWind/>
            <h4>{result?.wind?.speed} m/s</h4>
            <p>Wind</p>
          </div>
          <div className="details">
            <BsSpeedometer2/>
            <h4>{result?.main?.pressure} hPa</h4>
            <p>Pressure</p>
          </div>
        </div>
      </div>
    </>
  );
}
