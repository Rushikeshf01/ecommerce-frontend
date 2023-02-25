import { FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";
import { UserCartType } from "../../../../types/authTypes";
import UserFavoriteButton from "../UserFavoriteButton";
import StarRatingInput from "../UserReviews/UserStarRatings";

const UserCartCard = (props: { userCart: UserCartType }) => {
  const handleViewSingleProduct = () => {};
  const handleClickFavorite = () => {};

  return (
    <div
      className="user-cart-main-box pointer"
      onClick={handleViewSingleProduct}
    >
      <div>
        <img src="" alt="Product Img" />
      </div>
      <div>
        <div className="flex align-items-center justify-content-space-between">
          <p className="text-[20px] font-semibold">
            {props.userCart.productName}
          </p>
          <UserFavoriteButton />
        </div>
        <p className="light-gray-font">{props.userCart.subcategoryName}</p>
        <StarRatingInput
          productRating={props.userCart.productAvgRating}
          isEditable={false}
          productRatingCount={props.userCart.productRatingCount}
        />
        <p>
          <span className="font-26px">₹{props.userCart.productPrice}</span>
          {"  "}
          <span className="font-20px line-through">Discounted price here</span>
          {"  "}
          <span className="light-green-font font-20px">{props.userCart.discountPercent}% Off</span>
        </p>
        <p className="light-gray-font">{props.userCart.productDescription}</p>
      </div>
    </div>
  );
};

export default UserCartCard;
