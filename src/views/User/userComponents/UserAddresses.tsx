import { Delete, Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import appClient from "../../../network/AppClient";
import { UserAddressesType } from "../../../types/authTypes";
import {
  capitalizeFirstLetter,
  combineJSONDataForUserAddress,
} from "../../../utils/jsFunctionsUtils";
import { ToastSuccessMessage } from "../../../utils/toastMessages";
import UserAddressInput, { userAddressInputs } from "./UserAddressInput";

const UserAddresses = (props: {
  userAddresses: UserAddressesType[];
  setUserAddresses: any;
}) => {
  const [isEditAddressClicked, setIsEditAddressClicked] =
    useState<boolean>(false);
  const [editAddressData, setEditAddressData] =
    useState<UserAddressesType>(userAddressInputs);
  const [isAddAddressClicked, setIsAddAddressClicked] =
    useState<boolean>(false);

  const handleDeleteAddress = async (id: number, index: number) => {
    const res = await appClient.delete(`/a2/address/${id}`);
    var array = [...props.userAddresses];
    if (index !== -1) {
      array.splice(index, 1);
      props.setUserAddresses(array);
    }
    ToastSuccessMessage(res.data.msg);
  };

  const handleEditAddressInputClicked = async (id: number) => {
    const res = await appClient.get(`/a2/address/${id}`);
    setEditAddressData(res.data);
    setIsEditAddressClicked(true);
  };

  const handleAddAddressInputClicked = () => {
    setIsAddAddressClicked(true);
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
              <p>{combineJSONDataForUserAddress(item)}</p>
              <p>Mobile Number: {item.mobile}</p>
            </div>
            <div className="mt-3 flex justify-content-space-between">
              <Button
                onClick={() => handleEditAddressInputClicked(item.address_id)}
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
                onClick={() => handleDeleteAddress(item.address_id, index)}
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
      <Button variant="contained" onClick={handleAddAddressInputClicked}>
        Add Delivary Address
      </Button>
      <UserAddressInput
        setIsEditAddressClicked={setIsEditAddressClicked}
        setIsAddAddressClicked={setIsAddAddressClicked}
        isEditAddressClicked={isEditAddressClicked}
        isAddAddressClicked={isAddAddressClicked}
        filledAddressData={editAddressData}
      />
    </div>
  );
};

export default UserAddresses;
