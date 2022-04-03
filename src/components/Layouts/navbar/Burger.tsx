import React, { useState } from "react";
import { StyledBurger } from "./NavbarStyles";
import OpenBurger from "./OpenBurger";



const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <OpenBurger isOpen={isOpen} />
    </>
  );
};

export default Burger;
