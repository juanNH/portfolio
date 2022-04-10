import { CreateIcon } from "./FooterStyles";
import { SocialNetworksProps } from "./interfaces";

export const FooterLogic = (IconsArray: SocialNetworksProps[]) => {
  const IconsStyled = [];

  for (let icon of IconsArray) {
    IconsStyled.push({ icon: CreateIcon(icon.icon), url: icon.url });
  }

  return { IconsStyled };
};
