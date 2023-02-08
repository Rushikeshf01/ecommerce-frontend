import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import appClient from "../../../../network/AppClient";
import { UserAddressesType } from "../../../../types/authTypes";
import { ToastSuccessMessage } from "../../../../utils/toastMessages";
import UserAddressDropdown from "./UserAddressDropdown";
import { userAddressInputs } from "./UserAddresses";
import UserAddressInputFields from "./UserAddressInputFields";

const UserAddressInputMain = (props: {
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

  useEffect(() => {
    if (props.isEditAddressClicked) {
      setUserAddressInputState(props.filledAddressData);
    } else {
      setUserAddressInputState(userAddressInputs);
    }
  }, []);

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
          <UserAddressInputFields
            setUserAddressInputState={setUserAddressInputState}
            userAddressInputState={userAddressInputState}
          />
          <UserAddressDropdown
            setUserAddressInputState={setUserAddressInputState}
            userAddressInputState={userAddressInputState}
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

export default UserAddressInputMain;
