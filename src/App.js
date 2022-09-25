// import { useState, useEffect, useRef } from "react";
import "./App.css";

import Header from "./Header/Header.js";
import AppBody from "./AppBody/AppBody.js";

console.clear();

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppBody />
    </div>
  );
};

export default App;

const LOG = (log) => {
  console.log(
    "%cYOUR LOG HERE",
    "border: 4px solid #555; border-radius: 4px; color: aqua; font-size: 36px; text-align: center"
  );
};

LOG("TEST")