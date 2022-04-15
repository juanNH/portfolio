import { IconType } from "react-icons";
import styled from "styled-components";
import { StyledLink } from "../../commons/linkComponent/LinkComponentStyles";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 25vh;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.third};
`;

export const TextContainer = styled.div`
  display: grid;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  margin: auto;
  padding: 1rem;
  flex-direction: column;
  ${StyledLink} {
    color: ${(props) => props.theme.colors.third};
  }
`;
export const PersonalDataContainer = styled.div`
  margin: auto;
  padding: 1rem;
`;

export const CreateIcon = (icon: IconType) => {
  return styled(icon)`
    font-size: 40px;
    color: ${(props) => props.theme.colors.third};
  `;
};
