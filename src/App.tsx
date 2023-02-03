import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { ApplicationConstant } from "./constant/applicationConstant";
import Routes from "./router";

function App() {
  const authStore = useSelector((state: RootState) => state.authReducer);

  const navigate = useNavigate();
  useEffect(() => {
    if (!authStore.isAuthenticated) {
      navigate(ApplicationConstant.LOGIN_URL_PATH);
    }
    else {
      navigate(ApplicationConstant.HOME_URL_PATH);
    }
  }, []);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
