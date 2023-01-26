import Link from "next/link";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Nav = styled.div`
    background: ${props => props.theme.palette.bg};;
    width: 100%;
    height: 70px;
    position: fixed;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled.div`
    display: flex;
    margin-left: 0.5rem;
    align-items: center;
    color: ${props => props.theme.palette.text.title};
`;
interface MenuProps {
    isOpen: boolean;
}
export const Menu = styled.ul<MenuProps>`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    @media screen and (max-width: ${props => props.theme.media.md}){
        background-color: ${props => props.theme.palette.bg};
        position: absolute;
        width: 100%;
        top: 70px;
        left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 500ms all ease;
    }
`;
export const MenuItem = styled.li`
    height:100%;
    @media screen and (max-width: ${props => props.theme.media.md}){
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const IconClose = styled(AiOutlineClose)`
    color: ${props => props.theme.palette.text.title};
    margin-right: 1rem;
`;
export const IconOpen = styled(AiOutlineMenu)`
    color: ${props => props.theme.palette.text.title};
    margin-right: 1rem;
`;
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: ${props => props.theme.media.md}){
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;
export const MenuItemLink = styled(Link)`
    color: ${props => props.theme.palette.text.light};
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 500ms all ease;
    &:hover{
        color: ${props => props.theme.palette.text.dark};
        background-color:  ${props => props.theme.palette.secondary};;
        transition: 500ms all ease;
    }
    @media screen and (max-width: ${props => props.theme.media.md}){
        width: 100%;
    }
`;

