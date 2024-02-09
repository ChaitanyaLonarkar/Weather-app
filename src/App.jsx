import { useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./component/Search";

function App() {
  const [city, setcity] = useState("");

  const [result, setresult] = useState();
  
  const getWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68ce1a3783491eae7572980c6207086b&units=metric`
    );
    const data = response.data;
    console.log(data);
    setresult(data)
    console.log(result);
  };
  return (
    <>
        {/* <input
          type="text"
          placeholder="Enter city"
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
        <button onClick={getWeather}>get</button>
        <p>{city}</p> */}
      <Search Weather={getWeather}/>

    </>
  );
}

export default App;
