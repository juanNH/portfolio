import styled from "styled-components";

export const Container = styled.div`
    background-color:${({theme})=>theme.colors.background};
    border-radius:5px;
    min-width: 60%;
    min-height: 60%;
    padding:5%;
    display:flex;
    align-items:center;
    justify-content:center;
`;