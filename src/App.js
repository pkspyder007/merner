import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/").then((res) => console.log(res));
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is custom BoilerPlate for mern stack created to help people
          setting their MERN project in an efficient way
        </p>
        <a
          className="App-link"
          href="https://thejsguy.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          By: Praveen
        </a>
      </header>
    </div>
  );
}

export default App;
