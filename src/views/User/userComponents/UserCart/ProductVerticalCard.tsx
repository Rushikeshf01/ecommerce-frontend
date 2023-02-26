import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProductQuntity,
  increaseProductQuntity,
} from "../../../../../store/slices/cartSlice";
import { RootState } from "../../../../../store/store";
import { ProductVerticleCardProps } from "../../../../types/authProps";
import { UserCartType } from "../../../../types/authTypes";
import BasicProductVerticalCard from "./BasicProductVerticalCard";

const ProductVerticalCard = (props: {
  cardDetails: ProductVerticleCardProps;
  isCartCard: boolean;
}) => {
  const [quntityCount, setquntityCount] = useState(0);
  const dispatch = useDispatch();
  const cartStore: UserCartType[] = useSelector(
    (state: RootState) => state.cartReducer
  );

  const handleQuntityIncrease = () => {
    setquntityCount(
      cartStore[
        cartStore.findIndex(
          (item) => item.productId == props.cardDetails.productId
        )
      ].quantity
    );
    dispatch(increaseProductQuntity(props.cardDetails.productId));
  };

  const handleQuntityDecrease = () => {
    setquntityCount(
      cartStore[
        cartStore.findIndex(
          (item) => item.productId == props.cardDetails.productId
        )
      ].quantity
    );
    dispatch(decreaseProductQuntity(props.cardDetails.productId));
  };

  if (props.isCartCard) {
    return (
      <BasicProductVerticalCard
        component={
          <div className="product-vertical-card-quntity-input-box border-light-gray">
            <IconButton
              onClick={handleQuntityDecrease}
              size="large"
              color="primary"
              aria-label="delete"
              disabled={quntityCount <= 0}
            >
              <Remove fontSize="inherit" />
            </IconButton>
            <p>{quntityCount}</p>
            <IconButton
              onClick={handleQuntityIncrease}
              size="large"
              color="primary"
              aria-label="delete"
              // disabled={}
            >
              <Add fontSize="inherit" />
            </IconButton>
          </div>
        }
        cardDetails={props.cardDetails}
      />
    );
  }

  return <BasicProductVerticalCard cardDetails={props.cardDetails} />;
};

export default ProductVerticalCard;
