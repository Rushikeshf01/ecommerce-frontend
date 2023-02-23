import { Add, Favorite, FavoriteBorder, Remove } from "@mui/icons-material";
import { useState } from "react";
import { SingleProductType } from "../../../types/authTypes";

const SingleProductQuntityInput = (props: {
  singleProductState: SingleProductType;
}) => {
  const [isFavoriteClicked, setisFavoriteClicked] = useState(props.singleProductState.isFavorite);

  const handleFavoriteClicked = () => {
    setisFavoriteClicked(!isFavoriteClicked);
  };

  return (
    <div className="single-product-quntity-input-main">
      <div className="single-product-quntity-input-box">
        <Remove className="pointer single-product-quntity-input-icon-hover" />
        <p>{"0"}</p>
        <Add className="pointer single-product-quntity-input-icon-hover" />
      </div>
      <div
        onDoubleClick={handleFavoriteClicked}
        className="single-product-quntity-input-box single-product-quntity-input-box-hover pointer"
      >
        {isFavoriteClicked ? <Favorite /> : <FavoriteBorder />}
      </div>
      <div className="single-product-quntity-input-box single-product-quntity-input-box-hover pointer">
        ADD TO CART
      </div>
    </div>
  );
};

export default SingleProductQuntityInput;
