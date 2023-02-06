import { useRoutes } from "react-router-dom";
import { ApplicationConstant } from "../constant/applicationConstant";
import Dashboard from "../views/Home";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Register from "../views/Login/Register";
import Login from "../views/Login/Login";

export default function App() {
  const authStore = useSelector((state: RootState) => state.authReducer);

  if (!authStore.isAuthenticated) {
    return useRoutes([
      {
        path: ApplicationConstant.LOGIN_URL_PATH,
        element: <Login />,
      },
      {
        path: ApplicationConstant.REGISTER_URL_PATH,
        element: <Register />,
      },
    ]);
  }

  return useRoutes([
    {
      path: ApplicationConstant.LOGIN_URL_PATH,
      element: <Login />,
    },
    {
      path: ApplicationConstant.REGISTER_URL_PATH,
      element: <Register />,
    },
    {
      path: ApplicationConstant.HOME_URL_PATH,
      element: <Dashboard />,
    },
  ]);
}
