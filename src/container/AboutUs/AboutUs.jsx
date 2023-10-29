import React from "react";

import "./AboutUs.css";
import images from "../../constants/images";

export default function AboutUs() {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.bb} alt="B" />
      </div>
    </div>
  );
}
