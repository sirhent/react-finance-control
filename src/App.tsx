import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/darkTheme";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Home />
    </ThemeProvider>
  );
}