import React from "react";
import "./Header.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";

export default function Header() {
  return (
    <div className="app__bg">
      <div
        className="app__header app__bg flex__center section__padding"
        id="home"
      >
        <div className="app__header-overlay flex__center">
          <div className="app__header-content">
            <SubHeading title="Chase the new flavor" />
            <h1 className="app__header-h1 centered-text">
              the finest coffee in town
            </h1>
            <p
              className="p__opensans centered-text"
              style={{ margin: "2rem 0" }}
            >
              A stylish Berlin café for amazing coffees, delicious cakes, and
              lunch menus. Relax in our warm and welcoming atmosphere, perfect
              for working, reading, or catching up with friends.
            </p>
            <button className="custom__button"> Explore Menu</button>
          </div>
          <div className="app__header_img image__blend"></div>
        </div>
      </div>
    </div>
  );
}
