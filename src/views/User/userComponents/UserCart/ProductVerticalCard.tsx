import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseProductQuntity } from "../../../../../store/slices/cartSlice";
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
    dispatch(increaseProductQuntity(props.cardDetails.productId));
    setquntityCount(
      cartStore[
        cartStore.findIndex(
          (item) => item.productId == props.cardDetails.productId
        )
      ].quantity
    );
  };

  const handleQuntityDecrease = () => {};

  if (props.isCartCard) {
    return (
      <BasicProductVerticalCard
        component={
          <div className="product-vertical-card-quntity-input-box border-light-gray">
            <Remove
              className="product-vertical-card-action"
              onClick={handleQuntityDecrease}
            />
            <p>{quntityCount}</p>
            <Add
              className="product-vertical-card-action"
              onClick={handleQuntityIncrease}
            />
          </div>
        }
        cardDetails={props.cardDetails}
      />
    );
  }

  return <BasicProductVerticalCard cardDetails={props.cardDetails} />;
};

export default ProductVerticalCard;
