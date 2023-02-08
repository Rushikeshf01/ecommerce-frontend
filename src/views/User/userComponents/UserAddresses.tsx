import { Delete, Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { UserAddressesType } from "../../../types/authTypes";
import { capitalizeFirstLetter } from "../../../utils/jsFunctionsUtils";
import UserAddressInput from "./UserAddressInput";

const UserAddresses = (props: { userAddresses: UserAddressesType[] }) => {
  const [isEditAddressClicked, setIsEditAddressClicked] =
    useState<boolean>(false);

  const handleDeleteAddress = (id: number) => {
    console.log(id);
  };

  const handleAddressInputClicked = () => {
    setIsEditAddressClicked(true);
  };

  return (
    <div>
      <hr className="my-2" />
      <div className="mb-5 grid grid-cols-2 gap-4">
        {props.userAddresses.map((item, index) => (
          <div className="user-address-box-main" key={`user-address: ${index}`}>
            <div>
              <p className="font-medium mb-2">
                {`${capitalizeFirstLetter(item.name)}`}
              </p>
              <p>
                {`${capitalizeFirstLetter(item.address_line1)},`}{" "}
                {`${capitalizeFirstLetter(item.address_line2)},`}
                {`${capitalizeFirstLetter(item.area)},`}{" "}
                {`${capitalizeFirstLetter(item.city)},`}{" "}
                {`${capitalizeFirstLetter(item.state)},`}{" "}
                {`${capitalizeFirstLetter(item.country)}`} - {item.postal_code}
              </p>
              <p>Mobile Number: {item.mobile}</p>
            </div>
            <div className="mt-3 flex justify-content-space-between">
              <Button
                onClick={handleAddressInputClicked}
                startIcon={<Edit />}
                color="success"
                size="small"
                fullWidth
                sx={{ marginRight: "5px" }}
                variant="contained"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteAddress(item.address_id)}
                startIcon={<Delete />}
                color="error"
                size="small"
                fullWidth
                sx={{ marginLeft: "5px" }}
                variant="outlined"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Button variant="contained" onClick={handleAddressInputClicked}>
        Add Delivary Address
      </Button>
      <UserAddressInput
        open={isEditAddressClicked}
        setIsEditAddressClicked={setIsEditAddressClicked}
      />
    </div>
  );
};

export default UserAddresses;
