import { Button, TextField } from "@mui/material";

const UserProfilePersonalInformation = () => {
  return (
    <div>
      <p className="font-medium">Personal information</p>
      <hr className="my-2" />
      <div className="flex">
        <p className="text-slate-500 w-[30%] mr-10 text-[15px]">
          In order to properly handle the processing, payment and shipment of
          your orders, our web-app collect information such as your address,
          phone numbers, email and payment accounts.
        </p>
        <div className="w-[70%]">
          <TextField
            label="First Name"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Last Name"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Mobile Number"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            label="Date Of Birth"
            id="filled-basic"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <Button variant="contained">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePersonalInformation;
