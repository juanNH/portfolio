import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../styles/theme';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/navbar/Navbar';

export default function App({ Component, pageProps, router }: AppProps) {

  return (<>

    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}
