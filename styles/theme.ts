interface Palette{
    primary: string;
    secondary: string;
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
      primary: 'white',
      secondary: 'black',
    },
    media: {
      sm: '480px',
      md: '960px',
      lg: '1200px'
    },
  };