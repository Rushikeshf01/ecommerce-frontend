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

  const inputFieldsData: { name: string; label: string }[] = [
    { name: "name", label: "Name" },
    { name: "mobile", label: "Mobile Number" },
    { name: "line1", label: "Address Line 1" },
    { name: "line2", label: "Address Line 2" },
    { name: "area", label: "Area" },
    { name: "postalCode", label: "Postal Code" },
  ];

  return (
    <>
      {inputFieldsData.map((item, index) => (
        <CustomizedTextField
          value={(props.userAddressInputState as any)[item.name]}
          name={item.name}
          onChange={handleOnChange}
          label={item.label}
          required
          fullWidth
          key={`user-address-input-field: ${index}`}
        />
      ))}
    </>
  );
};

export default UserAddressInputFields;
