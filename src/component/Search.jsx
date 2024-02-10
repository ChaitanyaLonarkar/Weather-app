import React from "react";
import cloud from "../assets/perfect-day.svg";
export default function Search(props) {
  return (
    <>
      <div className="container">
        <h1>React Weather App</h1>
        <img src={cloud} alt="" />
        <h3>Explore Weather of your city</h3>
        <div className="search">
          <input type="text" onChange={(e)=>{props.city(e.target.value)}} placeholder="Enter your city" />
          <button onClick={props.Weather}>Search</button>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}
