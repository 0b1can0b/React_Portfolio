import { useState, useEffect, useRef } from "react";
import "./App.css";

import Header from "./Header/Header.js";
import AppBody from "./AppBody/AppBody.js";
import Footer from "./Footer/Footer.js";

console.clear();

const App = () => {

  return (
    <div className="App">
      <Header />
      <AppBody />
      <Footer />
    </div>
  );
};

export default App;
