import { TextField } from "@mui/material";
import { UserPersonalInformationType } from "../../../../types/authTypes";

const userProfilePersonalInfoTextfields = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "mobile", label: "Mobile Number", type: "text" },
  { name: "dob", label: "Date Of Birth", type: "date" },
];
const UserProfilePersonalInfoTextfields = (props: {
  setIsSaveButtonClicked: any;
  setPersonalInfo: any;
  personalInfo: UserPersonalInformationType;
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setIsSaveButtonClicked(false);
    const { name, value } = e.currentTarget;
    props.setPersonalInfo((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      {userProfilePersonalInfoTextfields.map((item, index) => (
        <TextField
          name={item.name}
          value={(props.personalInfo as any)[item.name]}
          onChange={handleOnChange}
          label={item.label}
          type={item.type}
          InputLabelProps={{ shrink: true }}
          id="filled-basic"
          variant="filled"
          margin="normal"
          fullWidth
          required
        />
      ))}
    </>
  );
};

export default UserProfilePersonalInfoTextfields;
