import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import { Link } from "react-router-dom";
import { ApplicationConstant } from "../constant/applicationConstant";
import "./header.css";

const Header = () => {
  return (
    <div className="header-main">
      <Link
        to={ApplicationConstant.HOME_URL_PATH}
        className="text-[28px] font-bold green-font"
      >
        AMEZON
      </Link>
      <div className="header-middle-area-main">
        <p>Categories</p>
        <p>Top Deals</p>
        <p>What's New</p>
        <div>
          <input
            type="text"
            placeholder="Search product"
            className="header-searchbar"
          />
          <Search className="pointer" />
        </div>
      </div>
      <div className="flex align-items-center">
        <Link
          to={ApplicationConstant.USER_URL_PATH}
          className="mx-10 flex-column"
        >
          <AccountCircle sx={{ fontSize: "36px" }} />
          Account
        </Link>
        <Link to={ApplicationConstant.CART_URL_PATH} className="flex-column">
          <ShoppingCart sx={{ fontSize: "36px" }} />
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
