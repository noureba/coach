import React from "react";
import LinkStyle from "../styles/css/links.module.css"
import {AiOutlineMenu} from "react-icons/ai"

function Navbar() {
  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex flex-row justify-content-between align-items-center">
          <a className="navbar-brand text-light m-2" href="">
          <h1>COACH</h1>
          </a>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
              <AiOutlineMenu className="fs-1 text-light"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav m-auto">
              <li className="nav-item fs-5 mx-3 text-center">
                <a className={`nav-link text-light ${LinkStyle.link}`} aria-current="page" href="">
                  Home
                </a>
              </li>
              <li className="nav-item  fs-5 mx-3 text-center">
                <a className={`nav-link text-light ${LinkStyle.link}`} href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item fs-5 mx-3 text-center">
                <a className={`nav-link text-light ${LinkStyle.link}`} href="#contact">
                  Contact Me
                </a>
              </li>
              <li className="nav-item fs-5 mx-3 text-center">
                <a className={`nav-link text-light ${LinkStyle.link}`} href="#Clients">
                What My Clients are Saying
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
