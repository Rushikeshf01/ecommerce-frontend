import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { UserAccountInformationType } from "../../../types/authTypes";

const UserProfileAccountInformation = () => {
  const [accountInfo, setAccountInfo] = useState<UserAccountInformationType>({
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const [isSaveButtonClicked, setIsSaveButtonClicked] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setAccountInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClick = () => {
    setIsSaveButtonClicked(true);
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
          <TextField
            name="email"
            value={accountInfo.email}
            onChange={handleOnChange}
            label="Email"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
            name="oldPassword"
            value={accountInfo.oldPassword}
            onChange={handleOnChange}
            label="Old Password"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
            name="newPassword"
            value={accountInfo.newPassword}
            onChange={handleOnChange}
            label="New Password"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <Button
            onClick={handleOnClick}
            disabled={isSaveButtonClicked}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileAccountInformation;
