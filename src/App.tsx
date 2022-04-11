import React from "react";
import { ThemeProvider } from "styled-components";
import IndexRouter from "./router/IndexRouter";
import GlobalStyles from "./styles/global";
import light from "./styles/themes/light";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <IndexRouter />
    </ThemeProvider>
  );
};

export default App;
