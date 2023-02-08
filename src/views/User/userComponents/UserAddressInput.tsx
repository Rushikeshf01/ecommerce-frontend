import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const UserAddressInput = (props: {
  open: boolean;
  setIsEditAddressClicked: any;
}) => {
  const [userAddressInputState, setUserAddressInputState] = useState({
    name: "",
    line1: "",
    line2: "",
    area: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    mobile: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserAddressInputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClose = () => {
    props.setIsEditAddressClicked(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Add/Edit Delivary Address
      </DialogTitle>
      <DialogContent>
        <TextField
          value={userAddressInputState.name}
          name="name"
          onChange={handleOnChange}
          label="Name"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={userAddressInputState.mobile}
          name="mobile"
          onChange={handleOnChange}
          label="Mobile Number"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={userAddressInputState.line1}
          name="line1"
          onChange={handleOnChange}
          label="Address Line 1"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={userAddressInputState.line2}
          name="line2"
          onChange={handleOnChange}
          label="Address Line 2"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={userAddressInputState.area}
          name="area"
          onChange={handleOnChange}
          label="Area"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={userAddressInputState.city}
          name="city"
          onChange={handleOnChange}
          label="City"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={userAddressInputState.state}
          name="state"
          onChange={handleOnChange}
          label="State"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={userAddressInputState.country}
          name="country"
          onChange={handleOnChange}
          label="Country"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={userAddressInputState.postalCode}
          name="postalCode"
          onChange={handleOnChange}
          label="Postal Code"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
      </DialogContent>
      <DialogActions sx={{ padding: "10px 20px" }}>
        <Button onClick={handleClose} variant="outlined">
          Close
        </Button>
        <Button variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserAddressInput;
