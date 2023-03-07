import { Button, InputAdornment, TextField } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApplicationConstant } from "../../constant/applicationConstant";
import { RegisterStateType } from "../../types/authTypes";
import "./login.css";
import authClient from "../../network/AuthClient";
import { ToastDangerMessage, ToastSuccessMessage } from "../../utils/toastMessages";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { joiUtilObject } from "../../utils/joiValidation";

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterStateType>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isPasswordsSame, setIsPasswordsSame] = useState(false);
  const [isRegisterButtonClicked, setIsRegisterButtonClicked] = useState(false);

  const navigate = useNavigate();
  const authStore = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    if (authStore.isAuthenticated) {
      // Redirect user to the previous URL
      navigate(-1);
    }
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));

    if (name == "confirmPassword" || name == "password") {
      if (
        registerData.password === value ||
        registerData.confirmPassword === value
      ) {
        setIsPasswordsSame(false);
      } else {
        setIsPasswordsSame(true);
      }
    }
    setIsRegisterButtonClicked(false);
  };

  const registerDataValidation = async () => {
    const validationResult: any =
      joiUtilObject.validateRegisterData(registerData);
    if (!validationResult.true) {
      setIsRegisterButtonClicked(true);
      let res = await authClient.post("/register", {
        email: registerData.email,
        password: registerData.password,
      });
      ToastSuccessMessage(res.data.msg);
      return;
    }
    ToastDangerMessage(validationResult.error);
    return;
  };

  const handleOnClick = () => {
    registerDataValidation();
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
        <Button
          variant="contained"
          disabled={isRegisterButtonClicked}
          onClick={handleOnClick}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
