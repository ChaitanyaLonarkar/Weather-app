import React from "react";

export default function Result(props) {
  const {result}=props
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let day = weekday[d.getDay()];

  var dd = d.getDate();
  var mm = month[d.getMonth()];
  var yyyy = d.getFullYear();
  var date = d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();
  return (
    <>
      <div className="container">
        <div className="head">

        <p>Weatherman</p>
        </div>
        <div className="city-name">
            <h3>{result.name},{result?.sys?.country}</h3>
            <p>{day}, {date}</p>
        </div>
        <div className="temp">
          
            <h1>{result?.main?.temp}<span>°c</span> </h1>
        </div>
        <div className="type">
            {/* <p>Suuny{result?.weather[0]['description']}</p> */}
            <h3>{result?.main?.temp_min}°c / {result?.main?.temp_max}°c</h3>
        </div>
        <div className="info">

        </div>
      </div>
    </>
  );
}
