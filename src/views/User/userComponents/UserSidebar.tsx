import {
  AccountCircleOutlined,
  Edit,
  FavoriteBorderOutlined,
  RoomOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { ApplicationConstant } from "../../../constant/applicationConstant";
import "../user.css";

const UserSidebar = () => {
  const router = useLocation();
  const userSidebarLinks = [
    {
      icon: <AccountCircleOutlined />,
      text: "My Details",
      link: ApplicationConstant.USER_URL_PATH,
    },
    {
      icon: <ShoppingCartOutlined />,
      text: "My Cart",
      link: ApplicationConstant.USER_CART_URL_PATH,
    },
    {
      icon: <FavoriteBorderOutlined />,
      text: "My Favorites",
      link: ApplicationConstant.USER_FAVORITES_URL_PATH,
    },
    {
      icon: <RoomOutlined />,
      text: "My Addresses",
      link: ApplicationConstant.USER_ADDRESSES_URL_PATH,
    },
    {
      icon: <ShoppingBagOutlined />,
      text: "My Orders",
      link: ApplicationConstant.USER_ORDERS_URL_PATH,
    },
    {
      icon: <Edit />,
      text: "My Reviews",
      link: ApplicationConstant.USER_REVIEWS_URL_PATH,
    },
  ];

  return (
    <div className="flex flex-direction-column w-[30%]">
      {userSidebarLinks.map((item, index) => (
        <Link
          to={item.link}
          key={`user-sidebar: ${index}`}
          className={
            router.pathname == item.link
              ? "user-sidebar-item blue-font-hover blue-font"
              : "user-sidebar-item blue-font-hover"
          }
        >
          <p className="mr-1">{item.icon}</p>
          <p>{item.text}</p>
        </Link>
      ))}
      <div>
        <button type="submit" className="user-sidebar-logout-button">
          Log Out
        </button>
        <button
          type="submit"
          className="user-sidebar-deleteaccount-button not-allowed"
          disabled
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
