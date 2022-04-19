import styled from "styled-components";

export const UpperTextContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: ${({theme})=> theme.colors.text};
`;
export const StoryContainer = styled.div`
padding: 1rem;
margin:0 40%;
h2{
  text-align: center;
  margin: 0.5rem;
  font-size: 25px;
  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    font-size: 30px;
  }
}
`
export const Text = styled.p`
  font-size: 20px;
  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    font-size: 24px;
  }
`;
