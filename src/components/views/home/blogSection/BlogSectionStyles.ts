import styled from "styled-components";

export const BlogSectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background };
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://via.placeholder.com/150");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
`;
