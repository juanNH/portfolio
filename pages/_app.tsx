import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    fg: "palevioletred",
    bg: "white",
    md: '960px'
  };
  return (<>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}
