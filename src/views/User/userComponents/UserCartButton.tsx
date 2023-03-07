import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addcart } from "../../../../store/slices/cartSlice";
import { ApiConstant } from "../../../constant/applicationConstant";
import appClient from "../../../network/AppClient";
import { ToastSuccessMessage } from "../../../utils/toastMessages";

const UserCartButton = (props: {
  productId: number;
  quantity: number;
  isAlreadyInCart?: boolean;
  className?: string;
  size?: number;
}) => {
  const [isCartButtonClicked, setIsCartButtonClicked] = useState(false);
  const dispatch = useDispatch();

  const handleAddIntoCart = () => {
    appClient
      .post(`${ApiConstant.ORDER_API_PATH}/cart`, {
        productId: props.productId,
        quantity: props.quantity,
      })
      .then((res) => {
        dispatch(addcart(res.data.cart));
        setIsCartButtonClicked(true);
        ToastSuccessMessage("Product added in cart");
      });
  };

  const handleRemoveFromCart = () => {
    setIsCartButtonClicked(false);
  };
  return (
    <div>
      {isCartButtonClicked ? (
        <ShoppingCart
          onClick={handleRemoveFromCart}
          className={`${props.className} pointer`}
          sx={{ fontSize: `${props.size}px` }}
        />
      ) : (
        <ShoppingCartOutlined
          onClick={handleAddIntoCart}
          className={`${props.className} pointer`}
          sx={{ fontSize: `${props.size}px` }}
        />
      )}
    </div>
  );
};

export default UserCartButton;
