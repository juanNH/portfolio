import React, { useState } from "react";
import { BurgerProps } from "./interfaces";
import { StyledBurger } from "./NavbarStyles";
import OpenBurger from "./OpenBurger";



const Burger = ({scroll}:BurgerProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledBurger scroll={scroll} isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <OpenBurger isOpen={isOpen} />
    </>
  );
};

export default Burger;
