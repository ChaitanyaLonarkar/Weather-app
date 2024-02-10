import { useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./component/Search";
import Result from "./component/Result";

function App() {
  const [result, setresult] = useState([]);
  const [city, setcity] = useState("");

  
  const getWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68ce1a3783491eae7572980c6207086b&units=metric`
    );
    const data = response.data;
    console.log(data);
    setresult(data)
    console.log("this is my data here",result)
    console.log(result.name,result.main.temp);
    

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
      <Search  Weather={getWeather} city={setcity}/>
      <Result result={result}/>
      {/* <p>{result.name}</p> */}
    </>
  );
}

export default App;
