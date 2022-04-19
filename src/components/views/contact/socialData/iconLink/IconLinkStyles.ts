import styled from "styled-components";

export const ALink = styled.a`
  font-size: 3rem;
  color: ${({theme})=>theme.colors.text};
  border: 1px solid ${({theme})=>theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  border-radius: 20%;
  :hover{
    color: ${({theme})=>theme.colors.primary};
    border: 1px solid ${({theme})=>theme.colors.primary};
  }
`;

