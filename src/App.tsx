import "react-toastify/dist/ReactToastify.css";

import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import React, { useState } from "react";

import { FormControlLabel } from "@mui/material";
import { Provider } from "react-redux";
import Switch from "@mui/material/Switch";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { UsersListPage } from "./pages";
import { store } from "./store";

export const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />

        <FormControlLabel
          control={
            <Switch
              checked={isDarkMode}
              onChange={handleThemeChange}
              color="primary"
            />
          }
          label={isDarkMode ? "Dark Mode" : "Light Mode"}
        />
        <UsersListPage />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
};
