import React from "react";

import "./Header.css";

import images from "../../constants/images";
import { SubHeading } from "../../components";

export default function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1"> Berlin's Favourite Bakery</h1>
      </div>
      <div app__wrapper_img></div>
    </div>
  );
}
