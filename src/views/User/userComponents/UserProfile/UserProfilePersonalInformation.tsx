import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserPersonalInformationType } from "../../../../types/authTypes";
import { joiUtilObject } from "../../../../utils/joiValidation";
import {
  ToastDangerMessage,
  ToastSuccessMessage,
} from "../../../../utils/toastMessages";
import { userAddressInputs } from "../UserAddress/UserAddresses";
import UserProfilePersonalInfoImage from "./UserProfilePersonalInfoImage";
import UserProfilePersonalInfoTextfields from "./UserProfilePersonalInfoTextfields";

const UserProfilePersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useState<UserPersonalInformationType>(
    {
      firstName: "",
      lastName: "",
      dob: "",
      mobile: "",
      profilePicName: "",
    }
  );
  const [profilePicBase64, setProfilePicBase64] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isSaveOrUpdate, setIsSaveOrUpdate] = useState("Save");

  useEffect(() => {
    getPrefilledProfile();
  }, []);

  const getPrefilledProfile = async () => {
    appClient.get(ApiConstant.USER_PROFILE_API_PATH).then((res) => {
      setPersonalInfo({
        dob: res.data.dob,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        mobile: res.data.mobile,
        profilePicName: "",
      });
      setProfilePicBase64(res.data.profilePic);
      setIsSaveOrUpdate("Update");
    });
  };

  const handleOnClick = () => {
    setIsButtonClicked(true);
    sendProfile();
  };

  const sendProfile = async () => {
    const validateUserProfileData: any = joiUtilObject.validateUserProfileData({
      ...personalInfo,
      profilePicBase64: profilePicBase64,
    });
    if (!validateUserProfileData.true) {
      appClient
        .put(ApiConstant.USER_PROFILE_API_PATH, {
          firstName: personalInfo.firstName,
          lastName: personalInfo.lastName,
          dob: personalInfo.dob,
          mobile: personalInfo.mobile,
          profilePic: profilePicBase64,
        })
        .then(() => {
          isSaveOrUpdate === "Save"
            ? ToastSuccessMessage("Profile added successfully")
            : ToastSuccessMessage("Profile updated successfully");
          setIsSaveOrUpdate("Update");
        });
      return;
    }
    ToastDangerMessage(validateUserProfileData.error);
  };

  return (
    <div>
      <p className="font-medium">Personal information</p>
      <hr className="my-2" />
      <div className="flex">
        <p className="text-slate-500 w-[30%] mr-10 text-[15px]">
          In order to properly handle the processing, payment and shipment of
          your orders, our application collect information such as your address,
          phone numbers, email and payment accounts.
        </p>
        <div className="w-[70%]">
          <UserProfilePersonalInfoTextfields
            personalInfo={personalInfo}
            setIsSaveButtonClicked={setIsButtonClicked}
            setPersonalInfo={setPersonalInfo}
          />
          <UserProfilePersonalInfoImage
            personalInfo={personalInfo}
            setProfilePicBase64={setProfilePicBase64}
            setIsSaveButtonClicked={setIsButtonClicked}
            setPersonalInfo={setPersonalInfo}
            base64={profilePicBase64}
          />
          <Button
            onClick={handleOnClick}
            disabled={isButtonClicked}
            variant="contained"
          >
            {isSaveOrUpdate}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePersonalInformation;
