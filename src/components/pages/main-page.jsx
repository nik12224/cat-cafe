import React from "react";
import About from "../blocks/about/about";
import StarsList from "../blocks/stars-list/stars-list";
import { TitleLevel } from "../ui/title/title";

function MainPage({ stars }) {
  return (
    <React.Fragment>
      <About leve={TitleLevel.H1} />
      <StarsList stars={stars} level={TitleLevel.H2} />
    </React.Fragment>
  );
}

export default MainPage;
