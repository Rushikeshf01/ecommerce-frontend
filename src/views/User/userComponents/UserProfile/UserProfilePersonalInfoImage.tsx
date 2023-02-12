import { useState } from "react";
import { UserPersonalInformationType } from "../../../../types/authTypes";
import { convertIntoBase64 } from "../../../../utils/jsFunctionsUtils";

const UserProfilePersonalInfoImage = (props: {
  personalInfo: UserPersonalInformationType;
  setProfilePicBase64: any;
  setIsSaveButtonClicked: any;
  setPersonalInfo: any;
  base64: string;
}) => {
  const [profilePicSizeError, setProfilePicSizeError] = useState(false);

  const handleImageOnClick = () => {
    setProfilePicSizeError(false);
    props.setProfilePicBase64("");
  };

  const handleImageOnChange = async (e: any) => {
    props.setIsSaveButtonClicked(false);
    const { name, value } = e.currentTarget;

    const filelist = e.target.files[0];
    props.setPersonalInfo((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));

    if (filelist.size / 1024 >= 2048) {
      setProfilePicSizeError(true);
      props.setProfilePicBase64("");
      return;
    }
    const base64 = await convertIntoBase64(filelist);
    props.setProfilePicBase64(typeof base64 === "string" ? base64 : "");
  };
  return (
    <div className="my-3">
      <input
        name="profilePicName"
        value={props.personalInfo.profilePicName || ""}
        onChange={handleImageOnChange}
        onClick={handleImageOnClick}
        type="file"
        placeholder="Upload profile picture"
        accept=".png, .jpg, .jpeg"
        className="pointer w-[100%] p-[12px] rounded-t-[4px] bg-[#F0F0F0] border-b-[0.5px] border-b-[#8B8B8B]"
      />
      {props.base64 && (
        <img
          src={props.base64}
          alt="preview image"
          className="w-[100px] mt-2"
        />
      )}
      {profilePicSizeError && (
        <span className="red-font">Upload image upto 2MB</span>
      )}
    </div>
  );
};

export default UserProfilePersonalInfoImage;
