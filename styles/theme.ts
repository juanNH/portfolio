import { createGlobalStyle } from "styled-components";
interface Colors{
  ligth: string;
  dark: string;
}

interface Palette {
  bg: string;
  primary: Colors;
  secondary: string;
  third: string;
  fourth: string;
  text: {
    title: string;
    light: string;
    dark: string;
  };
}
interface MediaQuery {
  sm: string;
  md: string;
  lg: string
}
interface Theme {
  palette: Palette;
  media: MediaQuery;
}
export const theme: Theme = {
  palette: {
    bg: 'rgba(24,26,27,1)',
    primary: {
      ligth: 'rgba(60, 20, 179,1)',
      dark: 'rgba(60, 20, 179,0.6)',
    },
    secondary: 'rgba(221,240,194,1)',
    third: 'rgba(68,112,2,1)',
    fourth: 'rgba(174,189,153,1)',
    text: {
      title: 'rgb(232, 230, 227)',
      light: 'rgb(163, 155, 143)',
      dark: 'rgba(0,0,0,1)'
    }
  },
  media: {
    sm: '480px',
    md: '960px',
    lg: '1200px'
  },
};
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.palette.bg};
    color: ${({ theme }) => theme.palette.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`