import styled from "styled-components";

export const PersonSection = styled.section`
  border-top: 1px solid red;
  background-image: url("https://via.placeholder.com/150");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 50vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5%;
  @media (max-width: ${({theme})=>theme.screenSize.small}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
