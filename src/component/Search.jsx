import React from "react";
import cloud from "../assets/perfect-day.svg";
export default function Search(props) {
  return (
    <>
      <div className="container">
        <h1>React Weather App</h1>
        <img src={cloud} alt="" />
        <h2>Explore Weather of your city</h2>
        <div className="search">
          <input type="text" onChange={(e)=>setcity(e.target.value)} placeholder="Enter your city" />
          <button onClick={props.weather}>Search</button>
        </div>
      </div>
    </>
  );
}
