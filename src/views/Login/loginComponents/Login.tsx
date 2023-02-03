import React, { useState } from "react";
import { LoginStateType } from "@/types/authTypes";
import { InputAdornment, TextField } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";

const Login = (props: { isRegister }) => {
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
        <p className="italic">If you have an account with us, please login.</p>
        <br />
        <p className="red-font">* Required fields</p>
        <TextField
          value={loginData.email}
          name={loginData.email}
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
          name={loginData.password}
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
        <p></p>
      </div>
    </div>
  );
};

export default Login;
