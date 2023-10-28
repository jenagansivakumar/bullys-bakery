import React from "react";
import { Gi } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img
            className="app__navbar-bullysimage"
            src={images.bullys}
            alt="app logo"
          />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            {" "}
            <a href="#home"> Home</a>
          </li>
          <li className="p__opensans">
            {" "}
            <a href="#about"> About</a>
          </li>
          <li className="p__opensans">
            {" "}
            <a href="#menu"> Menu</a>
          </li>
          <li className="p__opensans">
            {" "}
            <a href="#menu"> Awards</a>
          </li>
          <li className="p__opensans">
            {" "}
            <a href="#menu"> Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
