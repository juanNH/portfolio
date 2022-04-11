import React, { useState } from "react";
import LinkComponent from "../../commons/linkComponent/LinkComponent";
import { Header, NameContainer, Nav } from "./NavbarStyles";
import Burger from "./Burger";

const Navbar = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      if (!scroll) {
        setScroll(true);
      }
    } else {
      if (scroll) {
        setScroll(false);
      }
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <Header scroll={scroll}>
        <Nav>
          <NameContainer scroll={scroll}>
            <LinkComponent to="/" text="Juan Nicolas Herrera Delvalle" />
          </NameContainer>
          <Burger scroll={scroll} />
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
