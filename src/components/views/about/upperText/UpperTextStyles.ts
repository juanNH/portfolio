import styled from "styled-components";

export const UpperTextContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  width: 100%;
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: ${({theme})=> theme.colors.text};
`;

export const Text = styled.p`
  font-size: 18px;
  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    font-size: 24px;
  }
`;
