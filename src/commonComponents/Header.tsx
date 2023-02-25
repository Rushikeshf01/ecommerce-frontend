import {
  AccountCircle,
  FavoriteBorder,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import {
  ApiConstant,
  ApplicationConstant,
} from "../constant/applicationConstant";
import appClient from "../network/AppClient";
import "./header.css";
import HeaderCategories from "./HeaderCategories";

const Header = () => {
  const [isCategoryDroped, setIsCategoryDroped] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const favoriteStore = useSelector(
    (state: RootState) => state.favoriteReducer
  );
  const cartStore = useSelector((state: RootState) => state.cartReducer);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    appClient.get(`${ApiConstant.HOME_API_PATH}/categories`).then((res) => {
      setAllCategories(res.data.categories);
    });
  };

  const handleOnClick = () => {
    setIsCategoryDroped(!isCategoryDroped);
  };

  const headerIconsArray = [
    {
      link: ApplicationConstant.USER_CART_URL_PATH,
      component: (
        <Badge
          className="blue-font-hover hover:scale-110"
          badgeContent={cartStore.length}
          color="primary"
          overlap="circular"
        >
          <ShoppingCartOutlined sx={{ fontSize: "30px" }} />
        </Badge>
      ),
    },
    {
      link: ApplicationConstant.USER_FAVORITES_URL_PATH,
      component: (
        <Badge
          className="blue-font-hover hover:scale-110"
          badgeContent={favoriteStore.length}
          color="primary"
          overlap="circular"
        >
          <FavoriteBorder sx={{ fontSize: "30px" }} />
        </Badge>
      ),
    },
    {
      link: ApplicationConstant.USER_URL_PATH,
      component: (
        <AccountCircle
          className="blue-font-hover hover:scale-110"
          sx={{ fontSize: "30px" }}
        />
      ),
    },
  ];

  return (
    <div className="header-main">
      <Link
        to={ApplicationConstant.HOME_URL_PATH}
        className="text-[28px] font-bold blue-font"
      >
        AMEZON
      </Link>
      <div className="header-middle-area-main">
        <div className="pointer">
          <p onClick={handleOnClick}>
            Categories{" "}
            {isCategoryDroped ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </p>
          {isCategoryDroped && (
            <HeaderCategories
              setIsCategoryDroped={setIsCategoryDroped}
              allCategories={allCategories}
            />
          )}
        </div>
        <p className="pointer">Top Deals</p>
        <p className="pointer">What's New</p>
        <div className="border-[1px] px-[10px] rounded-[10px]">
          <input
            type="text"
            placeholder="Search product"
            className="py-[5px] outline-none"
          />
          <Search className="pointer header-search-icon" />
        </div>
      </div>
      <div className="flex align-items-center">
        {headerIconsArray.map((item, index) => (
          <Link
            to={item.link}
            className="mr-7 flex-column"
            key={`header-icon:${index}`}
          >
            {item.component}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
