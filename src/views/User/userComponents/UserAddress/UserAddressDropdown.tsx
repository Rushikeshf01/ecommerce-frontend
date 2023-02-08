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
  const [countryOptions, setCountryOptions] = useState<
    { country_name: string }[]
  >([]);
  const [stateOptions, setStateOptions] = useState<{ state_name: string }[]>(
    []
  );
  const [cityOptions, setCityOptions] = useState<{ city_name: string }[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

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

  return (
    <>
      <FormControl fullWidth>
        <label htmlFor="country" className="pointer">
          Country
          <span className="red-font"> *</span>
        </label>
        <CustomSelect
          id="country"
          labelId="country"
          name="country"
          value={props.userAddressInputState.country}
          onChange={(e: any) => handleCountryChange(e)}
        >
          {countryOptions.map((item, index) => (
            <MenuItem
              value={item.country_name}
              key={`${item.country_name}: ${index}`}
            >
              {item.country_name}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
      <FormControl fullWidth>
        <label htmlFor="state" className="pointer">
          State
          <span className="red-font"> *</span>
        </label>
        <CustomSelect
          id="state"
          labelId="state"
          name="state"
          value={props.userAddressInputState.state}
          onChange={(e: any) => handleStateChange(e)}
        >
          {stateOptions.map((item, index) => (
            <MenuItem
              value={item.state_name}
              key={`${item.state_name}: ${index}`}
            >
              {item.state_name}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
      <FormControl fullWidth>
        <label htmlFor="city" className="pointer">
          City
          <span className="red-font"> *</span>
        </label>
        <CustomSelect
          id="city"
          labelId="city"
          name="city"
          value={props.userAddressInputState.city}
          onChange={(e: any) => handleCityChange(e)}
        >
          {cityOptions.map((item, index) => (
            <MenuItem
              value={item.city_name}
              key={`${item.city_name}: ${index}`}
            >
              {item.city_name}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
    </>
  );
};

export default UserAddressDropdown;
