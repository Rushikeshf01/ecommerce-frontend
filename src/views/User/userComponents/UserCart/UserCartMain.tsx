import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../../../../../store/slices/cartSlice";
import NotAvailable from "../../../../commonComponents/NotAvailable";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserCartType } from "../../../../types/authTypes";
import User from "../../index";
import UserCart from "./UserCart";
import "./userCart.css";

const UserCartMain = () => {
  const [isUserCartApiCalling, setIsUserCartApiCalling] = useState(true);
  const [userCart, setUserCart] = useState<UserCartType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserCart();
  }, []);

  const getUserCart = () => {
    appClient
      .get(`${ApiConstant.ORDER_API_PATH}/cart`)
      .then((res) => {
        setUserCart(res.data.cart);
        dispatch(setCart(res.data.cart));
        setIsUserCartApiCalling(false);
      })
      .catch(() => {
        setIsUserCartApiCalling(false);
      });
  };

  return (
    <User
      component={
        <div className="w-[100%] user-profile-main-box">
          <p className="text-[30px] font-medium mb-4">My Cart (count)</p>
          <hr className="my-2 mb-5" />
          {isUserCartApiCalling ? (
            <CircularProgress color="success" size="30px" />
          ) : (
            <>
              {userCart.length === 0 ? (
                <NotAvailable label="Cart items" />
              ) : (
                <UserCart userCart={userCart} />
              )}
            </>
          )}
        </div>
      }
    />
  );
};

export default UserCartMain;
