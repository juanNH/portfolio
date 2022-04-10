import { IconType } from "react-icons";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 25vh;
`;

export const TextContainer = styled.div`
  display: inherit;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const SocialContainer = styled.div`
  display: inherit;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex: 1;
`;

export const LinksContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const CreateIcon = (icon: IconType) => {
  return styled(icon)`
    font-size: 40px;
    color:red;
  `;
};
