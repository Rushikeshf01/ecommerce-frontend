import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { ApplicationConstant } from "./constant/applicationConstant";
import { initializeAuthData } from "./network/AuthClient";
import Routes from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./commonComponents/Header";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
  palette: {
    primary: {
      main: "#006EC5",
      light: "#5791b3",
      dark: "#043e7d",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "lowercase",
        },
      },
    },
  },
});

function App() {
  const authStore = useSelector((state: RootState) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthData();
  }, []);

  const checkAuthData = async () => {
    if (await initializeAuthData()) {
      navigate(ApplicationConstant.HOME_URL_PATH);
    }
    navigate(ApplicationConstant.LOGIN_URL_PATH);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        {authStore.isAuthenticated && <Header />}
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
