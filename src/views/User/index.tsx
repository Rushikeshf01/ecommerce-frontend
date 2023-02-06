import AppBreadcrumps from "../../commonComponents/AppBreadcrumps";
import Header from "../../commonComponents/Header";
import { ApplicationConstant } from "../../constant/applicationConstant";
import "./user.css";

const previousData = [
  { previousText: "Home", previousLink: ApplicationConstant.HOME_URL_PATH },
];

const User = () => {
  return (
    <div>
      <Header />
      <div className="user-main-box">
        <AppBreadcrumps previousData={previousData} currentData="User" />
        User
      </div>
    </div>
  );
};

export default User;
