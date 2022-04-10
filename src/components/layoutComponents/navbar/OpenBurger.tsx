import React from "react";
import LinkComponent from "../../commons/linkComponent/LinkComponent";
import { Li, Ul } from "./NavbarStyles";
import { NavPages } from "./NavbarItemsData";

const RightNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Ul isOpen={isOpen}>
      {NavPages.map((item) => {
        return (
          <Li key={item.url}>
            <LinkComponent text={item.text} to={item.url} />
          </Li>
        );
      })}
    </Ul>
  );
};

export default RightNav;
