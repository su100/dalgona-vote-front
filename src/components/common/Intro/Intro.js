import React from "react";
import StarLine from "components/common/StarLine";
import moon from "images/moon.png";

import "./Intro.scss";

function Intro({ title, description }) {
  return (
    <div className="intro">
      <img src={moon} alt="moon" />
      <div className="intro-description">
        <div className="title">{title}</div>
        <StarLine />
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default Intro;
