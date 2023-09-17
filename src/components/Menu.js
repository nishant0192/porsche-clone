import React, { useState } from "react";
import ra from "../ra.png";
import { Link } from "react-router-dom";

function Menu({ toggleHide, hidden }) {
  const [opened, setOpened] = useState(false);
  // const [hidden, setHidden] = useState(false);



  const toggleMenu = () => {
    setOpened(!opened);
    // console.log(opened)
    if (!opened) {
      document.body.classList.add("blur");
      console.log("blur")
    } else {
      document.body.classList.remove("blur");
      console.log("not blur")
    }
    console.log("clicked");
    toggleHide();
    styleChanger();
  };

  const styleChanger = () => {
    const menu_button = document.getElementById("menu");
    let sidebar = document.getElementById("sidebar");
    if ((menu_button.style.display = "hidden")) {
      sidebar.style.display = "flex";
      // sidebar.
    } else {
      menu_button.style.display = "flex";
      sidebar.style.display = "hidden";
    }
  };

  const activeHandler = (e) => {
    // Get the clicked button element
    const button = e.currentTarget;
    // toggleMenu();
    // Get all buttons with class "side-items"
    const buttons = document.querySelectorAll(".side-items");

    // Remove the "active" id from all buttons
    buttons.forEach((btn) => {
      btn.removeAttribute("id");
    });

    // Set the id attribute of the clicked button to "active"
    button.setAttribute("id", "active");
  };

  return (
    <>
      <div
        className={`menu ${opened ? "opened" : ""}`}
        onClick={toggleMenu}
        aria-label="Main Menu"
        id="menu"
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
        <span>Menu</span>
      </div>
      <div className={`sidebar ${opened ? "visible" : ""}`} id="sidebar">
        <div className="txt">
          <button
            className="activ side-items"
            onClick={activeHandler}
            id="active"
          >
            <Link href="/">
              Models <img src={ra} alt="" />
            </Link>
          </button>
          <button className="side-items" onClick={activeHandler}>
            <Link href="">
              Vehicle Purchase <img src={ra} alt="" />
            </Link>
          </button>
          <button className="side-items" onClick={activeHandler}>
            <Link href="">
              Services <img src={ra} alt="" />
            </Link>
          </button>
          <button className="side-items" onClick={activeHandler}>
            <Link href="">
              Experience <img src={ra} alt="" />
            </Link>
          </button>
          <button className="side-items" onClick={activeHandler}>
            <Link href="">
              Find a dealer <img src={ra} alt="" />
            </Link>
          </button>
        </div>
        <div className="images">
          <img
            src="	https://nav.porsche.com/00BC524/series-assets/1360/718.webp"
            alt=""
          />
          <img
            src="	https://nav.porsche.com/00BC524/series-assets/1360/718.webp"
            alt=""
          />
          <img
            src="	https://nav.porsche.com/00BC524/series-assets/1360/718.webp"
            alt=""
          />
          <img
            src="	https://nav.porsche.com/00BC524/series-assets/1360/718.webp"
            alt=""
          />
          <img
            src="	https://nav.porsche.com/00BC524/series-assets/1360/718.webp"
            alt=""
          />
        </div>
        <div className="close">
          <button
            type="button"
            className="btn-close"
            onClick={toggleMenu}
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
}

export default Menu;
