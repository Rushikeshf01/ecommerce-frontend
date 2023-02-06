import {
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  RoomOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { ApplicationConstant } from "../../../constant/applicationConstant";
import "../user.css";

const UserSidebar = () => {
  const userSidebarLinks = [
    {
      icon: <AccountCircleOutlined />,
      text: "My details",
      link: ApplicationConstant.USER_URL_PATH,
    },
    {
      icon: <RoomOutlined />,
      text: "My saved addresses",
      link: ApplicationConstant.USER_ADDRESSES_URL_PATH,
    },
    {
      icon: <ShoppingBagOutlined />,
      text: "My orders",
      link: ApplicationConstant.USER_ORDERS_URL_PATH,
    },
    {
      icon: <FavoriteBorderOutlined />,
      text: "My favorites",
      link: ApplicationConstant.USER_FAVORITES_URL_PATH,
    },
    {
      icon: <FavoriteBorderOutlined />,
      text: "My reviews",
      link: ApplicationConstant.USER_REVIEWS_URL_PATH,
    },
  ];

  return (
    <div className="flex flex-direction-column">
      {userSidebarLinks.map((item, index) => (
        <NavLink
          to={item.link}
          key={`user-sidebar: ${index}`}
          className="user-sidebar-item"
        >
          <p className="mr-1">{item.icon}</p>
          <p>{item.text}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default UserSidebar;
