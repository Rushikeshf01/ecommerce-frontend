import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import appClient from "../../../../network/AppClient";
import { UserAddressesType } from "../../../../types/authTypes";

const CustomSelect = styled(Select)({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  marginBottom: "5px",
  marginTop: 2,
  borderRadius: 4,
});

const UserAddressDropdown = (props: {
  setUserAddressInputState: any;
  userAddressInputState: UserAddressesType;
}) => {
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const [stateOptions, setStateOptions] = useState<string[]>([]);
  const [cityOptions, setCityOptions] = useState<string[]>([]);

  useEffect(() => {
    getCountries();

    if (props.userAddressInputState.country) {
      getStates(props.userAddressInputState.country);
    }
    if (props.userAddressInputState.state) {
      getCities(props.userAddressInputState.state);
    }
  }, [props.userAddressInputState.country, props.userAddressInputState.state]);

  const getCountries = async () => {
    const res = await appClient.get("/a2/location/countries");
    setCountryOptions(res.data.countries);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    props.setUserAddressInputState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
    getStates(value);
  };

  const getStates = async (isoCode: string) => {
    const res = await appClient.get(`/a2/location/states?country=${isoCode}`);
    setStateOptions(res.data.states);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    props.setUserAddressInputState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
    getCities(value);
  };

  const getCities = async (isoCode: string) => {
    const res = await appClient.get(`/a2/location/cities?state=${isoCode}`);
    setCityOptions(res.data.cities);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    props.setUserAddressInputState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const inputFieldsData = [
    {
      name: "country",
      label: "Country",
      onChange: handleCountryChange,
      options: countryOptions,
    },
    {
      name: "state",
      label: "State",
      onChange: handleStateChange,
      options: stateOptions,
    },
    {
      name: "city",
      label: "City",
      onChange: handleCityChange,
      options: cityOptions,
    },
  ];

  return (
    <>
      {inputFieldsData.map((item, index) => (
        <FormControl fullWidth key={`user-address-select: ${index}`}>
          <label htmlFor={item.name} className="pointer">
            {item.label}
            <span className="red-font"> *</span>
          </label>
          <CustomSelect
            id={item.name}
            labelId={item.name}
            name={item.name}
            value={(props.userAddressInputState as any)[item.name]}
            onChange={(e: any) => {
              (item.onChange as any)(e);
            }}
          >
            {item.options.map((subItem, subIndex) => (
              <MenuItem value={subItem} key={`${subItem}: ${subIndex}`}>
                {subItem}
              </MenuItem>
            ))}
          </CustomSelect>
        </FormControl>
      ))}
    </>
  );
};

export default UserAddressDropdown;
