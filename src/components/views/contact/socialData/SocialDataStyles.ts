import styled from "styled-components";

export const SocialDataContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  width: 100%;
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
`;
export const Text = styled.p`
  font-size: 25px;
  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    font-size: 28px;
  }
`;

export const ALinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
