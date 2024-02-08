import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [city, setcity] = useState("");
  const [result, setresult] = useState();

  const getWeather= async ()=>{
   await axios
        // .get("https://picsum.photos/v2/list")
        // .get("https://api.unsplash.com/")
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
        .then(data=>console.log(data.data))
        .then(data => setresult(data.data))
        .catch(error => console.log(error));
  }
  return (
    <>
    <input type="text" placeholder='Enter city' onChange={(e)=>{setcity(e.target.value)}}/>
    <button onClick={getWeather}>get</button>
    <p>{city}</p>
    </>
  )
}

export default App
