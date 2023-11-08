import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { useState } from "react";
import logojena from "../../assets/logojena.svg";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="app__navbar flex__center section__padding" id="home">
        <nav className="app__navbar">
          <div className="app__navbar-logo">
            <logojena />
            <img className="app__navbar-bullysimage" alt="app logo" />
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
          <div className="app__navbar-login">
            <a href="#login" className="p__opensans">
              Login / Register
            </a>
            <div />

            <a href="/" className="p__opensans">
              {" "}
              Book Table{" "}
            </a>
          </div>
          <div className="app__navbar-smallscreen">
            <GiHamburgerMenu
              color="#fff"
              fontSize={27}
              onClick={() => setToggleMenu(true)}
            />

            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <MdOutlineRestaurantMenu
                  fontSize={27}
                  className="overlay__close"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="app__navbar-smallscreen_links">
                  <li>
                    <a href="#home" onClick={() => {}}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={() => {}}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#menu" onClick={() => {}}>
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="#awards" onClick={() => {}}>
                      Awards
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={() => {}}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
