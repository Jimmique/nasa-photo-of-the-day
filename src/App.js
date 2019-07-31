import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nasa from "./components/nasa.js";
import "./App.css";
import axios from "axios";
import "./index.css";

function App() {
  const [nasa, setNasa] = useState([]);


  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=7TEedvatBtcZa95WqVIdCySPyv7Fed6GNGxpefyi")
   .then((response) => {
     setNasa(response.data)
   }).catch((error) => {
     console.log(error)
   })
 }, [])
  return (
    <div className="App">
      <div className="shuttle">
        <h1>NASA Photo of the Day</h1>
         {console.log(nasa)}
         {<Nasa date={nasa.date} explanation={nasa.explanation} 
         src={nasa.url} media_type={nasa.media_type} hdurl={nasa.hdurl}
         title={nasa.title}/> }
      </div>
    </div>
  );
}

export default App;
