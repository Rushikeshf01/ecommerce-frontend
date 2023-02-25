import { Delete, Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import NotAvailable from "../../../../commonComponents/NotAvailable";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserAddressesType } from "../../../../types/authTypes";
import {
  capitalizeFirstLetter,
  combineJSONDataForUserAddress,
} from "../../../../utils/jsFunctionsUtils";
import { ToastSuccessMessage } from "../../../../utils/toastMessages";
import UserAddressInputMain from "./UserAddressInputMain";

export const userAddressInputs = {
  name: "",
  line1: "",
  line2: "",
  area: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
  mobile: "",
  addressId: 0,
};

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
    const res = await appClient.delete(
      `${ApiConstant.USER_ADDRESS_API_PATH}/${id}`
    );
    var array = [...props.userAddresses];
    if (index !== -1) {
      array.splice(index, 1);
      props.setUserAddresses(array);
    }
    ToastSuccessMessage(res.data.msg);
  };

  const handleEditAddressInputClicked = async (id: number) => {
    const res = await appClient.get(
      `${ApiConstant.USER_ADDRESS_API_PATH}/${id}`
    );
    setEditAddressData(res.data);
    setIsEditAddressClicked(true);
  };

  const handleAddAddressInputClicked = () => {
    setIsAddAddressClicked(true);
  };

  return (
    <div>
      {props.userAddresses.length != 0 ? (
        <div className="mb-4 grid grid-cols-2 gap-4">
          {props.userAddresses.map((item, index) => (
            <div
              className="user-address-box-main"
              key={`user-address: ${index}`}
            >
              <div>
                <div className="flex align-items-center justify-content-space-between mb-2">
                  <p className="font-medium">
                    {`${capitalizeFirstLetter(item.name)}`}
                  </p>
                  <div className="flex align-items-center gap-10px">
                    <Edit
                      onClick={() =>
                        handleEditAddressInputClicked(item.addressId)
                      }
                      className="pointer"
                      sx={{ fontSize: "24px" }}
                      color="success"
                    />
                    <Delete
                      onClick={() => handleDeleteAddress(item.addressId, index)}
                      className="pointer"
                      sx={{ fontSize: "24px" }}
                      color="error"
                    />
                  </div>
                </div>
                <p>{combineJSONDataForUserAddress(item)}</p>
                <p>Mobile Number: {item.mobile}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NotAvailable label="Address" className="mb-4" />
      )}
      <Button variant="contained" onClick={handleAddAddressInputClicked}>
        Add Delivary Address
      </Button>
      {(isAddAddressClicked || isEditAddressClicked) && (
        <UserAddressInputMain
          setIsEditAddressClicked={setIsEditAddressClicked}
          setIsAddAddressClicked={setIsAddAddressClicked}
          isEditAddressClicked={isEditAddressClicked}
          isAddAddressClicked={isAddAddressClicked}
          filledAddressData={editAddressData}
          setFilledAddressDataList={props.setUserAddresses}
          filledAddressDataList={props.userAddresses}
        />
      )}
    </div>
  );
};

export default UserAddresses;
