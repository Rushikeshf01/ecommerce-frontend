import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { UserPersonalInformationType } from "../../../../types/authTypes";

const UserProfilePersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useState<UserPersonalInformationType>(
    {
      firstName: "",
      lastName: "",
      dob: "",
      mobile: "",
      // profilePic: "",
    }
  );
  const [isSaveButtonClicked, setIsSaveButtonClicked] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setPersonalInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClick = () => {
    setIsSaveButtonClicked(true);
  };

  return (
    <div>
      <p className="font-medium">Personal information</p>
      <hr className="my-2" />
      <div className="flex">
        <p className="text-slate-500 w-[30%] mr-10 text-[15px]">
          In order to properly handle the processing, payment and shipment of
          your orders, our application collect information such as your address,
          phone numbers, email and payment accounts.
        </p>
        <div className="w-[70%]">
          {/* <TextField
            name="profilePic"
            value={personalInfo.profilePic}
            onChange={handleOnChange}
            type="file"
            InputLabelProps={{ shrink: true }}
            label="Profile Picture"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          /> */}
          <TextField
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleOnChange}
            label="First Name"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleOnChange}
            label="Last Name"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
            name="mobile"
            value={personalInfo.mobile}
            onChange={handleOnChange}
            label="Mobile Number"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
            name="dob"
            value={personalInfo.dob}
            onChange={handleOnChange}
            type="date"
            InputLabelProps={{ shrink: true }}
            label="Date Of Birth"
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

export default UserProfilePersonalInformation;
