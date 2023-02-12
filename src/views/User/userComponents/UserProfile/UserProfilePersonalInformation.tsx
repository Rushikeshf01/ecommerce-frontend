import { Button } from "@mui/material";
import { useState } from "react";
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSaveButtonClicked(false);
    const { name, value } = e.currentTarget;
    setPersonalInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnClick = () => {
    setIsSaveButtonClicked(true);
    sendPersonalData();
    sendProfilePic();
  };

  const sendPersonalData = async () => {
    let res = await appClient.put(ApiConstant.USER_PROFILE_API_PATH, {
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
      dob: personalInfo.dob,
      mobile: personalInfo.mobile,
    });
    ToastSuccessMessage(res.data.msg);
  };

  const sendProfilePic = async () => {
    let res = await appClient.put(ApiConstant.USER_PROFILE_IMAGE_API_PATH, {
      profilePic: profilePicBase64,
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
            handleOnChange={handleOnChange}
            personalInfo={personalInfo}
          />
          <UserProfilePersonalInfoImage
            personalInfo={personalInfo}
            setProfilePicBase64={setProfilePicBase64}
            setIsSaveButtonClicked={setIsSaveButtonClicked}
            setPersonalInfo={setPersonalInfo}
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
