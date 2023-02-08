import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { ApplicationConstant } from "./constant/applicationConstant";
import { initializeAuthData } from "./network/AuthClient";
import Routes from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
});

function App() {
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
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
