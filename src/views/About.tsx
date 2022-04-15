import React from "react";
import UpperText from "../components/views/about/upperText/UpperText";
import PagesLayOut from "../layouts/pagesLayOut/PagesLayOut";

const About = () => {
  return (
    <PagesLayOut title={"Sobre Mi"}>
      <UpperText />
    </PagesLayOut>
  );
};

export default About;
