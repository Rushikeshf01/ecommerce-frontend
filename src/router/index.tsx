import { useRoutes } from "react-router-dom";
import { ApplicationConstant } from "../constant/applicationConstant";
import Login from "../views/Login";
import Dashboard from "../views/Home";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

export default function App() {
  const authStore = useSelector((state: RootState) => state.authReducer);

  if (!authStore.isAuthenticated) {
    return useRoutes([
      {
        path: ApplicationConstant.LOGIN_URL_PATH,
        element: <Login />,
      },
    ]);
  }

  return useRoutes([
    {
      path: ApplicationConstant.HOME_URL_PATH,
      element: <Dashboard />,
    },
  ]);
}
