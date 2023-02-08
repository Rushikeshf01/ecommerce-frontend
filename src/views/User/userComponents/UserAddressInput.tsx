import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import appClient from "../../../network/AppClient";
import { UserAddressesType } from "../../../types/authTypes";
import { ToastSuccessMessage } from "../../../utils/toastMessages";
import CustomizedTextField from "./muiUserCustomizedComponents/CustomizedTextField";
import { userAddressInputs } from "./UserAddresses";
import { MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";

const CustomSelect = styled(Select)({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  marginBottom: "5px",
  marginTop: 2,
  borderRadius: 4,
});

const UserAddressInput = (props: {
  isEditAddressClicked: boolean;
  isAddAddressClicked: boolean;
  filledAddressData: UserAddressesType;
  filledAddressDataList: UserAddressesType[];
  setIsEditAddressClicked: any;
  setIsAddAddressClicked: any;
  setFilledAddressDataList: any;
}) => {
  const [userAddressInputState, setUserAddressInputState] =
    useState<UserAddressesType>(userAddressInputs);
  const [countryOptions, setCountryOptions] = useState<
    { country_iso_code: string; country_name: string }[]
  >([]);
  const [stateOptions, setStateOptions] = useState<any[]>([]);
  const [cityOptions, setCityOptions] = useState<any[]>([]);

  useEffect(() => {
    getCountries();
    if (props.isEditAddressClicked) {
      setUserAddressInputState(props.filledAddressData);
    } else {
      setUserAddressInputState(userAddressInputs);
    }
  }, []);

  const getCountries = async () => {
    const res = await appClient.get("/a2/location/countries");
    setCountryOptions(res.data.countries);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserAddressInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // getStates(value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserAddressInputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClose = () => {
    props.setIsAddAddressClicked(false);
    props.setIsEditAddressClicked(false);
  };

  const handleSubmitData = () => {
    if (props.isEditAddressClicked) return editAddressApiCall();
    if (props.isAddAddressClicked) return addAddressApiCall();
  };

  const addAddressApiCall = async () => {
    const res = await appClient.post(`/a2/addresses`, {
      name: userAddressInputState.name,
      line1: userAddressInputState.address_line1,
      line2: userAddressInputState.address_line2,
      area: userAddressInputState.area,
      city: userAddressInputState.city,
      state: userAddressInputState.state,
      country: userAddressInputState.country,
      postalCode: userAddressInputState.postal_code,
      mobile: userAddressInputState.mobile,
    });
    var array = [...props.filledAddressDataList];
    array.push(res.data.address);
    ToastSuccessMessage(res.data.msg);
    props.setFilledAddressDataList(array);
    props.setIsAddAddressClicked(false);
  };

  const editAddressApiCall = async () => {
    const res = await appClient.put(
      `/a2/address/${userAddressInputState.address_id}`,
      {
        name: userAddressInputState.name,
        line1: userAddressInputState.address_line1,
        line2: userAddressInputState.address_line2,
        area: userAddressInputState.area,
        city: userAddressInputState.city,
        state: userAddressInputState.state,
        country: userAddressInputState.country,
        postalCode: userAddressInputState.postal_code,
        mobile: userAddressInputState.mobile,
      }
    );
    var array = [...props.filledAddressDataList];
    var index = array.findIndex(
      (obj) => obj.address_id == userAddressInputState.address_id
    );
    array[index] = userAddressInputState;
    ToastSuccessMessage(res.data.msg);
    props.setFilledAddressDataList(array);
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
        <div className="grid grid-cols-2 gap-[10px]">
          <CustomizedTextField
            value={userAddressInputState.name}
            name="name"
            onChange={handleOnChange}
            label="Name"
            required
            fullWidth
          />
          <CustomizedTextField
            value={userAddressInputState.mobile}
            name="mobile"
            onChange={handleOnChange}
            label="Mobile Number"
            required
            fullWidth
          />
          <CustomizedTextField
            value={userAddressInputState.address_line1}
            name="address_line1"
            onChange={handleOnChange}
            label="Address Line 1"
            required
            fullWidth
          />
          <CustomizedTextField
            value={userAddressInputState.address_line2}
            name="address_line2"
            onChange={handleOnChange}
            label="Address Line 2"
            required
            fullWidth
          />
          <CustomizedTextField
            value={userAddressInputState.area}
            name="area"
            onChange={handleOnChange}
            label="Area"
            required
            fullWidth
          />
          <FormControl fullWidth>
            <label htmlFor="country" className="pointer">
              Country
              <span className="red-font">*</span>
            </label>
            <CustomSelect
              id="country"
              labelId="country"
              name="country"
              value={userAddressInputState.country}
              onChange={(e: any) => handleCountryChange(e)}
            >
              {countryOptions.map((item, index) => (
                <MenuItem
                  value={item.country_iso_code}
                  key={`${item.country_iso_code}: ${index}`}
                >
                  {item.country_name}
                </MenuItem>
              ))}
            </CustomSelect>
          </FormControl>
          <CustomizedTextField
            value={userAddressInputState.postal_code}
            name="postal_code"
            onChange={handleOnChange}
            label="Postal Code"
            required
            fullWidth
          />
        </div>
      </DialogContent>
      <DialogActions sx={{ padding: "10px 20px" }}>
        <Button onClick={handleClose} variant="outlined">
          Close
        </Button>
        <Button onClick={handleSubmitData} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserAddressInput;
