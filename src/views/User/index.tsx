import "./user.css";
import AppBreadcrumps from "../../commonComponents/AppBreadcrumps";
import Header from "../../commonComponents/Header";
import { ApplicationConstant } from "../../constant/applicationConstant";
// import UserProfileMain from "./userComponents/UserProfileMain";
import UserSidebar from "./userComponents/UserSidebar";

const previousData = [
  { previousText: "Home", previousLink: ApplicationConstant.HOME_URL_PATH },
];

const User = (props: { component: React.ReactNode }) => {
  return (
    <div>
      <div className="user-main-box">
        <AppBreadcrumps
          previousData={previousData}
          currentData="User"
          className="mb-3"
        />
        <p className="text-[36px] font-semibold mb-3">My Account</p>
        <div className="flex">
          <UserSidebar />
          {props.component}
        </div>
      </div>
    </div>
  );
};

export default User;
