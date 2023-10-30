import React from "react";

import "./Interim.css";
import images from "../../constants/images";

export default function Interim() {
  return (
    <div
      className="app__interim interim__bg flex__center section__padding"
      id="about"
    >
      <div className="app__interim-image">
        <img src={images.cafe_menu} alt="bb" />
      </div>
    </div>
  );
}
