import styled from "styled-components";

export const HeaderSection = styled.section`
  height: 50vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://via.placeholder.com/150");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  h1 {
    font-size: 50px;
    @media (max-width: ${({ theme }) => theme.screenSize.small}) {
      font-size: 40px;
    }
  }
`;
