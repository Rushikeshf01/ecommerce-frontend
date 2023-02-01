import { useRoutes } from "react-router-dom";
import { ApplicationConstant } from "../constant/applicationConstant";
import Login from "../views/Login";

export default function App() {
    return useRoutes([
        {
            path: ApplicationConstant.LOGIN_URL_PATH,
            element: <Login />
        }
    ])
}