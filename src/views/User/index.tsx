import "./user.css";
import AppBreadcrumps from "../../commonComponents/AppBreadcrumps";
import Header from "../../commonComponents/Header";
import { ApplicationConstant } from "../../constant/applicationConstant";
import UserProfileMain from "./userComponents/UserProfileMain";
import UserSidebar from "./userComponents/UserSidebar";

const previousData = [
  { previousText: "Home", previousLink: ApplicationConstant.HOME_URL_PATH },
];

const User = () => {
  return (
    <div>
      <Header />
      <div className="user-main-box">
        <AppBreadcrumps
          previousData={previousData}
          currentData="User"
          className="mb-6"
        />
        <p className="text-[36px] font-semibold mb-3">My Account</p>
        <div>
          <UserSidebar />
          <UserProfileMain />
        </div>
      </div>
    </div>
  );
};

export default User;
