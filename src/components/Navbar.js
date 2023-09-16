import React from "react";
import logo from "../logo.png";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="menu">
          <Menu />
        </div>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" style={{ width: "20%" }} />
          </a>
        </div>
      </div>
    </>
  );
}
