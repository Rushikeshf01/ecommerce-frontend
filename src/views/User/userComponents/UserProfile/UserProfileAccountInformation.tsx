import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { UserAccountInformationType } from "../../../../types/authTypes";

const userAccountSectionInputs = [
  { label: "Email", name: "email" },
  { label: "New Password", name: "newPassword" },
];

const UserProfileAccountInformation = () => {
  const [accountInfo, setAccountInfo] = useState<UserAccountInformationType>({
    email: "",
    newPassword: "",
  });
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsButtonClicked(false);
    const { name, value } = e.currentTarget;
    setAccountInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClick = () => {
    setIsButtonClicked(true);
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
              onChange={handleOnChange}
              label={item.label}
              key={`user-account-index: ${index}`}
              id="filled-basic"
              variant="filled"
              margin="normal"
              fullWidth
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
