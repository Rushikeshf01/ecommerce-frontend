import { TextField } from "@mui/material";
import { UserPersonalInformationType } from "../../../../types/authTypes";

const userProfilePersonalInfoTextfields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "mobile", label: "Mobile Number" },
  { name: "dob", label: "Date Of Birth" },
];
const UserProfilePersonalInfoTextfields = (props: {
  handleOnChange: any;
  personalInfo: UserPersonalInformationType;
}) => {
  return (
    <>
      {userProfilePersonalInfoTextfields.map((item, index) => (
        <TextField
          name={item.name}
          value={(props.personalInfo as any)[item.name]}
          onChange={props.handleOnChange}
          label={item.label}
          id="filled-basic"
          variant="filled"
          margin="normal"
          fullWidth
        />
      ))}
    </>
  );
};

export default UserProfilePersonalInfoTextfields;
