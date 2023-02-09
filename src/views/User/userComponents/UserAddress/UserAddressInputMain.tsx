import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserAddressesType } from "../../../../types/authTypes";
import { joiUtilObject } from "../../../../utils/joiValidation";
import { ToastDangerMessage, ToastSuccessMessage } from "../../../../utils/toastMessages";
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
    const validateAddressData: any = joiUtilObject.validateUserAddressData(
      userAddressInputState
    );
    if (!validateAddressData.true) {
      const res = await appClient.post(ApiConstant.USER_ADDRESS_API_PATH, {
        name: userAddressInputState.name,
        line1: userAddressInputState.line1,
        line2: userAddressInputState.line2,
        area: userAddressInputState.area,
        city: userAddressInputState.city,
        state: userAddressInputState.state,
        country: userAddressInputState.country,
        postalCode: userAddressInputState.postalCode,
        mobile: userAddressInputState.mobile,
      });
      var array = [...props.filledAddressDataList];
      array.push(res.data.address);
      ToastSuccessMessage(res.data.msg);
      props.setFilledAddressDataList(array);
      props.setIsAddAddressClicked(false);
      return;
    }
    ToastDangerMessage(validateAddressData.error);
    return;
  };

  const editAddressApiCall = async () => {
    const res = await appClient.put(
      `${ApiConstant.USER_ADDRESS_API_PATH}/${userAddressInputState.addressId}`,
      {
        name: userAddressInputState.name,
        line1: userAddressInputState.line1,
        line2: userAddressInputState.line2,
        area: userAddressInputState.area,
        city: userAddressInputState.city,
        state: userAddressInputState.state,
        country: userAddressInputState.country,
        postalCode: userAddressInputState.postalCode,
        mobile: userAddressInputState.mobile,
      }
    );
    var array = [...props.filledAddressDataList];
    var index = array.findIndex(
      (obj) => obj.addressId == userAddressInputState.addressId
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
