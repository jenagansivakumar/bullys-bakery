import React from "react";
import "./Interim.css";
import images from "../../constants/images";

export default function Interim() {
  return (
    <div className="app__interim interim__bg section__padding" id="about">
      <div className="app__interim-container">
        <div className="app__interim-image">
          <img src={images.coffee} alt="description" />
        </div>
        <div className="app__interim-image">
          <img src={images.salad} alt="description" />
        </div>
        <div className="app__interim-image">
          <img src={images.toastie} alt="description" />
        </div>
        <div className="app__interim-image">
          <img src={images.croissant} alt="description" />
        </div>
      </div>
    </div>
  );
}
