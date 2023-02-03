import React, { useState } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ApplicationConstant } from "../../constant/applicationConstant";
import { LoginStateType } from "../../types/authTypes";
import "./login.css";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginStateType>({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
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
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
};

export default Login;
