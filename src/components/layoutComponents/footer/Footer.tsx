import React from "react";
import LinkComponent from "../../commons/linkComponent/LinkComponent";
import {
  FooterContainer,
  LinksContainer,
  SocialContainer,
  TextContainer,
} from "./FooterStyles";
import { FooterLinks, SocialNetworks } from "./FooterItemsData";
import { FooterLogic } from "./FooterLogic";
import { SocialNetworksProps } from "./interfaces";
import IconLink from "./IconLink/IconLink";

const Footer = () => {
  const { IconsStyled } = FooterLogic(SocialNetworks);
  return (
    <FooterContainer>
      <TextContainer>
        <div>
          <h3>Juan Herrera</h3>
          <h5>© Todos los derechos reservados 2022</h5>
        </div>
        <LinksContainer>
          {FooterLinks.map((item) => {
            return (
              <LinkComponent to={item.url} text={item.text} key={item.url} />
            );
          })}
        </LinksContainer>
      </TextContainer>
      <SocialContainer>
        {IconsStyled.map((icon: SocialNetworksProps, index) => {
          return (
            <IconLink to={icon.url} key={icon.url}>
              <icon.icon />
            </IconLink>
          );
        })}
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
