import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../../../store/slices/cartSlice";
import { RootState } from "../../../../../store/store";
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
  const dataFechedRef = useRef(false);

  const cartStore = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();
  
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
        dispatch(setCart([]));
      });
  };
  
  useEffect(() => {
    if (dataFechedRef.current) return;
    dataFechedRef.current = true;
    getUserCart();
  }, [cartStore]);

  return (
    <User
      component={
        <div className="w-[100%] user-profile-main-box">
          <p className="text-[30px] font-medium mb-4">My Cart ({cartStore.length})</p>
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
