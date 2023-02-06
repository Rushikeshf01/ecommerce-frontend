import "../user.css";
import UserProfileAccountInformation from "./UserProfileAccountInformation";
import UserProfilePersonalInformation from "./UserProfilePersonalInformation";

const UserProfileMain = () => {
  return (
    <div className="w-[100%] user-profile-main-box">
      <p className="text-[30px] font-medium mb-4">My details</p>
      <UserProfilePersonalInformation />
      <UserProfileAccountInformation />
    </div>
  );
};

export default UserProfileMain;
