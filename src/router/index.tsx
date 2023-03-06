import { useRoutes } from "react-router-dom";
import { ApplicationConstant } from "../constant/applicationConstant";
import Dashboard from "../views/Home";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Register from "../views/Login/Register";
import Login from "../views/Login/Login";
import User from "../views/User";
import UserAddressMain from "../views/User/userComponents/UserAddress/UserAddressMain";
import UserProfileMain from "../views/User/userComponents/UserProfile/UserProfileMain";
import UserOrderMain from "../views/User/userComponents/UserOrder/UserOrderMain";
import UserFavoritesMain from "../views/User/userComponents/UserFavorites/UserFavoritesMain";
import UserReviewsMain from "../views/User/userComponents/UserReviews/UserReviewsMain";
import UserCartMain from "../views/User/userComponents/UserCart/UserCartMain";
import SingleProductMain from "../views/Product/SingleProduct/SingleProductMain";

export default function App() {
  return useRoutes([
    {
      path: ApplicationConstant.LOGIN_URL_PATH,
      element: <Login />,
    },
    {
      path: ApplicationConstant.REGISTER_URL_PATH,
      element: <Register />,
    },
    {
      path: ApplicationConstant.HOME_URL_PATH,
      element: <Dashboard />,
    },
    {
      path: ApplicationConstant.USER_URL_PATH,
      element: <UserProfileMain />,
    },
    {
      path: ApplicationConstant.USER_ADDRESSES_URL_PATH,
      element: <UserAddressMain />,
    },
    {
      path: ApplicationConstant.USER_ORDERS_URL_PATH,
      element: <UserOrderMain />,
    },
    {
      path: ApplicationConstant.USER_FAVORITES_URL_PATH,
      element: <UserFavoritesMain />,
    },
    {
      path: ApplicationConstant.USER_REVIEWS_URL_PATH,
      element: <UserReviewsMain />,
    },
    {
      path: ApplicationConstant.USER_CART_URL_PATH,
      element: <UserCartMain />,
    },
    {
      path: ApplicationConstant.PRODUCT_DYNAMIC_URL_PATH,
      element: <SingleProductMain />,
    },
  ]);
}
