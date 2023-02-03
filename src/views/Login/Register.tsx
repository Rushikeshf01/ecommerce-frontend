import { InputAdornment, TextField } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ApplicationConstant } from "../../constant/applicationConstant";
import { RegisterStateType } from "../../types/authTypes";

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterStateType>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="main">
      <div className="box">
        <p className="box-text">REGISTER</p>
        <p className="italic">If you have an account with us, please login.</p>
        <br />
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
        <Link
          className="pointer blue-font"
          to={ApplicationConstant.LOGIN_URL_PATH}
        >
          Already our user? Login Now
        </Link>
      </div>
    </div>
  );
};

export default Register;
