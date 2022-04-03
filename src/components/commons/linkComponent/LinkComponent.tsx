import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLinkProps } from "./interfaces";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const LinkComponent = ({ to, text }: StyledLinkProps) => {
  return <StyledLink to={to}>{text}</StyledLink>;
};

export default LinkComponent;
