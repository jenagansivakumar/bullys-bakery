import React from "react";

import "./Header.css";

import images from "../../constants/images";
import { SubHeading } from "../../components";

export default function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading />
      </div>

      <div app__wrapper_img></div>
    </div>
  );
}
