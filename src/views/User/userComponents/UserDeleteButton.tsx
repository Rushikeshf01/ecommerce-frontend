import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromcart } from "../../../../store/slices/cartSlice";
import { RootState } from "../../../../store/store";
import { ApiConstant } from "../../../constant/applicationConstant";
import appClient from "../../../network/AppClient";
import { ToastSuccessMessage } from "../../../utils/toastMessages";

const UserDeleteButton = (props: {
  toolTipTitle: string;
  component?: React.ReactNode;
  cartId?: number;
  favoriteId?: number;
}) => {
  const dispatch = useDispatch();

  const cartStore = useSelector((state: RootState) => state.cartReducer);
  const favoriteStore = useSelector(
    (state: RootState) => state.favoriteReducer
  );

  const handleOnClickForDeleteIcon = () => {
    props.component ? deleteFromCart() : deleteFromFavorites();
  };

  const deleteFromCart = async () => {
    if (props.cartId) {
      dispatch(removeItemFromcart(props.cartId));
      const res = await appClient.delete(
        `${ApiConstant.ORDER_API_PATH}/cart/${props.cartId}`
      );
      ToastSuccessMessage("Product removed from the cart");
    }
  };

  const deleteFromFavorites = async () => {};

  return (
    <div>
      <Tooltip title={props.toolTipTitle}>
        <IconButton onClick={handleOnClickForDeleteIcon}>
          <Delete color="error" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default UserDeleteButton;
