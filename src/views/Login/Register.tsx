import { Button, InputAdornment, TextField } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ApplicationConstant } from "../../constant/applicationConstant";
import { RegisterStateType } from "../../types/authTypes";
import "./login.css";
import authClient from "../../network/AuthClient";
import { ToastSuccessMessage } from "../../utils/toastMessages";

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterStateType>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isPasswordsSame, setIsPasswordsSame] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
    setIsPasswordsSame(false);
    if (name == "confirmPassword") {
      if (registerData.password != value) {
        setIsPasswordsSame(true);
      } else {
        setIsPasswordsSame(false);
      }
    }
  };

  const handleOnClick = async () => {
    let res = await authClient.post("/a1/auth/register", {
      email: registerData.email,
      password: registerData.password,
    });
    ToastSuccessMessage(res.data.msg)
  };

  return (
    <div className="main">
      <div className="box">
        <p className="box-text">SIGN UP</p>
        <p className="red-font">* Required fields</p>
        <TextField
          value={registerData.email}
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
          value={registerData.password}
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
        <TextField
          value={registerData.confirmPassword}
          name="confirmPassword"
          onChange={handleOnChange}
          label="Confirm Password"
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
        {isPasswordsSame && <p className="red-font">Password doesn't match</p>}
        <p className="my-3">
          <Link
            className="pointer blue-font"
            to={ApplicationConstant.LOGIN_URL_PATH}
          >
            Already our user? Login Now
          </Link>
        </p>
        <Button variant="contained" onClick={handleOnClick}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
