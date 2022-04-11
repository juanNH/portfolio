import React from "react";
import { StyledLinkProps } from "./interfaces";
import { StyledLink } from "./LinkComponentStyles";



const LinkComponent = ({ to, text }: StyledLinkProps) => {
  return <StyledLink to={to}>{text}</StyledLink>;
};

export default LinkComponent;
