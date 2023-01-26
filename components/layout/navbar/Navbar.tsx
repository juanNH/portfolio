import { useState } from 'react';
import { IconClose, IconOpen, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Nav, Wrapper } from './Navbar.elements';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <Nav>
            <Wrapper>
                <LogoContainer>
                    {/*  <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
                    <h1 className="text-black">logo</h1>
                </LogoContainer>
                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    {isOpen
                        ? <IconClose />
                        : <IconOpen />
                    }
                </MobileIcon>
                <Menu isOpen={isOpen}>
                    <MenuItem>
                        <MenuItemLink href="/">
                            HOME
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink href="/">
                            ABOUT ME
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink href="/">
                            PORTFOLIO
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink href="/">
                            CONTACT ME
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Nav>
    )
}
export default Navbar;
