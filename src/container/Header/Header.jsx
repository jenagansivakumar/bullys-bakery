import React from "react";

import "./Header.css";

import images from "../../constants/images";
import { SubHeading } from "../../components";

export default function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1"> The key to fine dining </h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {" "}
          A stylish Berlin café for amazing coffees, delicious cakes, and lunch
          menus. Relax in our warm and welcoming atmosphere, perfect for
          working, reading, or catching up with friends.
        </p>
        <button className="custom__button"> Explore Menu</button>
      </div>
      <div app__wrapper_img></div>
      <img src={images.welcome} alt="welcome_image" />
    </div>
  );
}
