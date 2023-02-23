import { Add, Favorite, FavoriteBorder, Remove } from "@mui/icons-material";
import React, { useState } from "react";

const SingleProductQuntityInput = () => {
  const [isFavoriteClicked, setisFavoriteClicked] = useState(false);

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
