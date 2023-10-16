import logo from "./logo.svg";
import "./App.css";
import router from "./route/router";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
