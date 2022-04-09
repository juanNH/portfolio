import React from "react";
import styled from "styled-components";
import LinkComponent from "../../commons/linkComponent/LinkComponent";
import { Li, Ul } from "./NavbarStyles";



const RightNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Ul isOpen={isOpen}>
      <Li>
        <LinkComponent text={"Home"} to={"/"} />
      </Li>
      <Li>
        <LinkComponent text={"About Me"} to={"/about"} />
      </Li>
      <Li>
        <LinkComponent text={"Contact"} to={"/contact"} />
      </Li>
    </Ul>
  );
};

export default RightNav;
