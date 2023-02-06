import React, { useEffect, useState } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { ApplicationConstant } from "../../constant/applicationConstant";
import { LoginStateType } from "../../types/authTypes";
import "./login.css";
import { ToastSuccessMessage } from "../../utils/toastMessages";
import authClient from "../../network/AuthClient";
import { useDispatch, useSelector } from "react-redux";
import { setAuthentication } from "../../../store/slices/authSlice";
import { RootState } from "../../../store/store";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginStateType>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStore = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    if (authStore.isAuthenticated) {
      navigate(ApplicationConstant.HOME_URL_PATH);
    }
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClick = async () => {
    let res = await authClient.post("/a1/auth/login", loginData);
    console.log(res.data);
    localStorage.setItem(
      ApplicationConstant.REFRESH_TOKEN,
      res.data.refreshToken
    );
    dispatch(
      setAuthentication({
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
        user: res.data.user,
        isAuthenticated: true,
      })
    );
    navigate(ApplicationConstant.HOME_URL_PATH);
  };

  return (
    <div className="main">
      <div className="box">
        <p className="box-text">LOGIN</p>
        <p className="red-font">* Required fields</p>
        <TextField
          value={loginData.email}
          name="email"
          onChange={handleOnChange}
          label="Email"
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={loginData.password}
          name="password"
          onChange={handleOnChange}
          label="Password"
          type="password"
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <p className="my-3">
          <Link
            className="pointer blue-font"
            to={ApplicationConstant.REGISTER_URL_PATH}
          >
            Not registered with us? Register Now
          </Link>
        </p>
        <Button onClick={handleOnClick} variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
