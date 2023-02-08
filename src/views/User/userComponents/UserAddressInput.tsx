import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserAddressesType } from "../../../types/authTypes";
import { userAddressInputs } from "./UserAddresses";

const UserAddressInput = (props: {
  isEditAddressClicked: boolean;
  isAddAddressClicked: boolean;
  setIsEditAddressClicked: any;
  setIsAddAddressClicked: any;
  filledAddressData: UserAddressesType;
}) => {
  const [userAddressInputState, setUserAddressInputState] =
    useState<UserAddressesType>(userAddressInputs);

  useEffect(() => {
    if (props.isEditAddressClicked) {
      setUserAddressInputState(props.filledAddressData);
    } else {
      setUserAddressInputState(userAddressInputs);
    }
  },[]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserAddressInputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClose = () => {
    props.setIsAddAddressClicked(false);
    props.setIsEditAddressClicked(false);
  };

  return (
    <Dialog
      open={props.isEditAddressClicked || props.isAddAddressClicked}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {props.isEditAddressClicked && "Edit delivary address"}
        {props.isAddAddressClicked && "Add delivary address"}
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
          value={userAddressInputState.address_line1}
          name="address_line1"
          onChange={handleOnChange}
          label="Address Line 1"
          required
          margin="normal"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value={userAddressInputState.address_line2}
          name="address_line2"
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
          value={userAddressInputState.postal_code}
          name="postal_code"
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
