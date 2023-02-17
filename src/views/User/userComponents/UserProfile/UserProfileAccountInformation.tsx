import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserAccountInformationType } from "../../../../types/authTypes";
import {
  ToastDangerMessage,
  ToastSuccessMessage,
} from "../../../../utils/toastMessages";

const userAccountSectionInputs = [
  { label: "Email", name: "email", disabled: true, type: "text" },
  {
    label: "New Password",
    name: "newPassword",
    disabled: false,
    type: "password",
  },
];

const UserProfileAccountInformation = () => {
  const [accountInfo, setAccountInfo] = useState<UserAccountInformationType>({
    email: "",
    newPassword: "",
  });
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const authState = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    setAccountInfo((prev) => ({ ...prev, email: authState.user.email }));
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsButtonClicked(false);
    const { name, value } = e.currentTarget;
    setAccountInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClick = () => {
    setIsButtonClicked(true);
    accountInfo.newPassword.length >= 5
      ? updateUserPasswordAPI()
      : ToastDangerMessage("Password must be 5 character long");
  };

  const updateUserPasswordAPI = async () => {
    appClient
      .put(ApiConstant.USER_PASSWORD_API_PATH, {
        newPassword: accountInfo.newPassword,
      })
      .then((res) => {
        ToastSuccessMessage(res.data.msg);
      });
  };

  return (
    <div className="my-8">
      <p className="font-medium">Account information</p>
      <hr className="my-2" />
      <div className="flex">
        <p className="text-slate-500 w-[30%] mr-10 text-[15px]">
          In order to properly handle the processing, payment and shipment of
          your orders, our application collect information such as your address,
          phone numbers, email and payment accounts.
        </p>
        <div className="w-[70%]">
          {userAccountSectionInputs.map((item, index) => (
            <TextField
              name={item.name}
              value={(accountInfo as any)[item.name]}
              defaultValue={(accountInfo as any)[item.name]}
              onChange={handleOnChange}
              label={item.label}
              disabled={item.disabled}
              type={item.type}
              key={`user-account-index: ${index}`}
              id="filled-basic"
              variant="filled"
              margin="normal"
              fullWidth
              required
            />
          ))}
          <Button
            onClick={handleOnClick}
            disabled={isButtonClicked}
            variant="contained"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileAccountInformation;
