import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./base.scss";
import { Nav } from "./components/nav";
import Main from "./components/Main";

function App() {
  return (
    <div >
      <Nav />
      <div className="wrapper">
      <Main />
      </div>
          
    </div>
  );
}

export default App;
