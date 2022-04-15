import styled from "styled-components";
import { StyledLink } from "../../commons/linkComponent/LinkComponentStyles";
import {
  BurgerDivProps,
  HeaderProps,
  NameContainerProps,
  UlProps,
} from "./interfaces";

export const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem;
  transition: all 0.3s linear;
  background-color: ${({ scroll, theme }) =>
    scroll ? theme.colors.secondary : "transparent"};
`;

export const NameContainer = styled.div<NameContainerProps>`
  margin: 0 1rem;
  transition: all 0.3s linear;

  ${StyledLink} {
    color: ${({ scroll, theme }) =>
      scroll ? theme.colors.background : theme.colors.text};
  }
`;

export const Nav = styled.nav`
  padding: 0.5rem;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: sans-serif;
  font-size: 1.5rem;
`;
export const Li = styled.li`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.third};
  border: 2px solid black;
  padding: 0.5rem;
  border-radius: 50px;
  margin: 0 1rem;
  transition: all 300ms;
  :hover {
    background: ${(props) => props.theme.colors.secondary};
    transition: all 300ms;
    border-color: ${(props) => props.theme.colors.third};
    ${StyledLink} {
      color: ${(props) => props.theme.colors.third};
    }
  }

  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    margin: 1rem 0;
  }
`;

export const StyledBurger = styled.div<BurgerDivProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isOpen }) => (isOpen ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: red;

    background-color: ${({ scroll, theme }) =>
      scroll ? theme.colors.background : theme.colors.text};
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Ul = styled.ul<UlProps>`
  list-style: none;
  display: flex;
  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    align-items: center;
    flex-direction: column;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 30vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
