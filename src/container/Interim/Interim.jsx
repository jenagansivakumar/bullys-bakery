import React from "react";

import "./Interim.css";
import images from "../../constants/images";

export default function Interim() {
  return (
    <div
      className="app__interim interim__bg flex__center section__padding"
      id="about"
    >
      <div className="app__interim-container">
        <div className="app__interim-image image1">
          <img src={images.cafe_menu} alt="bb" />
        </div>
        <div className="app__interim-image image2">
          <img src={images.welcome_coffee_beans} alt="description" />
        </div>
      </div>
    </div>
  );
}
