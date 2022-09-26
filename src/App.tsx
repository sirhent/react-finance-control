import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/darkTheme";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Transactions />
    </ThemeProvider>
  );
}