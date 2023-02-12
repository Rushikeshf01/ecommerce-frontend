import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserPersonalInformationType } from "../../../../types/authTypes";
import { ToastSuccessMessage } from "../../../../utils/toastMessages";
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
  const [isSaveButtonClicked, setIsSaveButtonClicked] = useState(false);

  useEffect(() => {
    getPrefilledProfile();
  }, []);

  const getPrefilledProfile = async () => {
    let infoRes = await appClient.get(ApiConstant.USER_PROFILE_API_PATH);
    setPersonalInfo({
      dob: infoRes.data.dob,
      firstName: infoRes.data.firstName,
      lastName: infoRes.data.lastName,
      mobile: infoRes.data.mobile,
      profilePicName: ""
    });
    let picRes = await appClient.get(ApiConstant.USER_PROFILE_IMAGE_API_PATH);
    setProfilePicBase64(picRes.data.userProfileDataUrl);
  };

  const handleOnClick = () => {
    setIsSaveButtonClicked(true);
    sendProfile();
  };

  const sendProfile = async () => {
    let res = await appClient.put(ApiConstant.USER_PROFILE_IMAGE_API_PATH, {
      profilePic: profilePicBase64,
    });
    res = await appClient.put(ApiConstant.USER_PROFILE_API_PATH, {
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
      dob: personalInfo.dob,
      mobile: personalInfo.mobile,
    });
    ToastSuccessMessage(res.data.msg);
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
            setIsSaveButtonClicked={setIsSaveButtonClicked}
            setPersonalInfo={setPersonalInfo}
          />
          <UserProfilePersonalInfoImage
            personalInfo={personalInfo}
            setProfilePicBase64={setProfilePicBase64}
            setIsSaveButtonClicked={setIsSaveButtonClicked}
            setPersonalInfo={setPersonalInfo}
            base64={profilePicBase64}
          />
          <Button
            onClick={handleOnClick}
            disabled={isSaveButtonClicked}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePersonalInformation;
