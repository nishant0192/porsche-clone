import { useState } from "react";
import "./App.css";
import Caraousel from "./components/Caraousel";
import Grids from "./components/Grids";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from "./logo.png";

function App() {
  const [hidden, setHidden] = useState(false);
  const toggleHide = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar toggleHide={toggleHide} hidden={hidden} />
        <Caraousel />
        {!hidden && (
          <h2
            style={{ marginTop: "5rem", fontSize: "3rem", marginLeft: "5rem" }}
          >
            Models
          </h2>
        )}
        {!hidden && <Grids toggleHide={toggleHide} hidden={hidden} />}
        {!hidden && (
          <h2
            style={{ marginTop: "5rem", fontSize: "3rem", marginLeft: "5rem" }}
          >
            Find a Porsche near you
          </h2>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
