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
        <Remove className="pointer" />
        <p>{"0"}</p>
        <Add className="pointer" />
      </div>
      <div
        onDoubleClick={handleFavoriteClicked}
        className="single-product-quntity-input-box pointer"
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
