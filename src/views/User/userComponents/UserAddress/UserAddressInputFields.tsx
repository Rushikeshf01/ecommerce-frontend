import React from "react";
import { UserAddressesType } from "../../../../types/authTypes";
import CustomizedTextField from "../muiUserCustomizedComponents/CustomizedTextField";

const UserAddressInputFields = (props: {
  setUserAddressInputState: any;
  userAddressInputState: UserAddressesType;
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    props.setUserAddressInputState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <CustomizedTextField
        value={props.userAddressInputState.name}
        name="name"
        onChange={handleOnChange}
        label="Name"
        required
        fullWidth
      />
      <CustomizedTextField
        value={props.userAddressInputState.mobile}
        name="mobile"
        onChange={handleOnChange}
        label="Mobile Number"
        required
        fullWidth
      />
      <CustomizedTextField
        value={props.userAddressInputState.address_line1}
        name="address_line1"
        onChange={handleOnChange}
        label="Address Line 1"
        required
        fullWidth
      />
      <CustomizedTextField
        value={props.userAddressInputState.address_line2}
        name="address_line2"
        onChange={handleOnChange}
        label="Address Line 2"
        required
        fullWidth
      />
      <CustomizedTextField
        value={props.userAddressInputState.area}
        name="area"
        onChange={handleOnChange}
        label="Area"
        required
        fullWidth
      />
      <CustomizedTextField
        value={props.userAddressInputState.postal_code}
        name="postal_code"
        onChange={handleOnChange}
        label="Postal Code"
        required
        fullWidth
      />
    </>
  );
};

export default UserAddressInputFields;
