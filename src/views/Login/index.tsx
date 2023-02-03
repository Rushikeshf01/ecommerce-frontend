import "./login.css";
import { useState } from "react";
import Login from "./loginComponents/Login";
import Register from "./loginComponents/Register";

const LoginMain = () => {
  const [isRegister, setIsRegister] = useState({
    isClicked: false,
    onClickMsg: "Not registered with us ? Register Now",
  });

  if (isRegister.isClicked) return <Register />;
  return <Login isRegister={isRegister} />;
};

export default LoginMain;
