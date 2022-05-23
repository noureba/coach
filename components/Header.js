import React from "react";
import Navbar from "./Navbar";
import ButtonStyle from "../styles/css/buttons.module.css";

function Header() {
  return (
    <div className="header ">
      <Navbar />
      <div className="container m-auto">
        <div className="px-3 py-5 FDM">
          <p className="text-light fs-5 my-3">CERTIFIED LIFE COACH</p>
          <p className="text-light fs-1 my-3">You Have the Ability to Go Beyond!</p>
          <p className="text-light my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className={`${ButtonStyle.button} my-3`} >SCHEDULE A CALL</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
