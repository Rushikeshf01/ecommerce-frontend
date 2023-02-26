import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { ProductVerticleCardProps } from "../../../../types/authProps";
import BasicProductVerticalCard from "./BasicProductVerticalCard";

const ProductVerticalCard = (props: {
  cardDetails: ProductVerticleCardProps;
  isCartCard: boolean;
}) => {
  const [quntityCount, setquntityCount] = useState(0);

  const handleQuntityIncrease = () => {};
  const handleQuntityDecrease = () => {};

  if (props.isCartCard) {
    return (
      <BasicProductVerticalCard
        component={
          <div className="product-vertical-card-quntity-input-box border-light-gray">
            <Remove
              className="product-vertical-card-action"
              onClick={handleQuntityIncrease}
            />
            <p>{props.cardDetails.quantity}</p>
            <Add
              className="product-vertical-card-action"
              onClick={handleQuntityDecrease}
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
