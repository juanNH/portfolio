import React from "react";
import LinkComponent from "../../commons/linkComponent/LinkComponent";
import { Header, NameContainer, Nav } from "./NavbarStyles";
import Burger from "./Burger";

const Navbar = () => {

  return (
    <>
      <Header>
        <Nav>
          <NameContainer>
            <LinkComponent to="/" text="Juan Nicolas Herrera Delvalle" />
          </NameContainer>
          <Burger />
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
