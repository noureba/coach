import React from "react";
import {BsFacebook} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";

function Footer() {
  return (
    <div className="container m-auto d-flex flex-row justify-content-between align-items-center border-top p-2">
      <p className="fw-normal m-3">copyright 2022</p>
      <div>
        <BsFacebook className="mx-2 fs-3 "/>
        <AiFillInstagram className="mx-2 fs-1 "/>
        <BsLinkedin className="mx-2 fs-3 "/>
        <AiFillMail className="mx-2 fs-1 "/>
      </div>
    </div>
  );
}

export default Footer;
