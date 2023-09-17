import React from "react";
import logo from "../logo.png";
import Menu from "./Menu";

export default function Navbar({ toggleHide, hidden }) {
  return (
    <>
      <div className="nav">
        <div className="menu">
          <Menu toggleHide={toggleHide} hiddene={hidden} />
        </div>
        <div className="logo">
          <a href="/">
            {!hidden && <img src={logo} alt="" style={{ width: "20%" }} />}
          </a>
        </div>
      </div>
    </>
  );
}
