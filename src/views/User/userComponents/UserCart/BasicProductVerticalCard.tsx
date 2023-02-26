import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationConstant } from "../../../../constant/applicationConstant";
import { ProductVerticleCardProps } from "../../../../types/authProps";
import UserCartButton from "../UserCartButton";
import UserFavoriteButton from "../UserFavoriteButton";
import StarRatingInput from "../UserReviews/UserStarRatings";

const BasicProductVerticalCard = (props: {
  component?: React.ReactNode;
  cardDetails: ProductVerticleCardProps;
}) => {
  const navigate = useNavigate();
  const handleViewSingleProduct = (id: number) => {
    navigate(`${ApplicationConstant.PRODUCT_URL_PATH}/${id}`);
  };

  return (
    <div className="product-vertical-card-main-box">
      <div>
        <img
          src=""
          alt="Product Img"
          className="pointer"
          onClick={() => handleViewSingleProduct(props.cardDetails.productId)}
        />
      </div>
      <div>
        <div className="flex align-items-center justify-content-space-between">
          <p
            className="text-[20px] font-semibold pointer"
            onClick={() => handleViewSingleProduct(props.cardDetails.productId)}
          >
            {props.cardDetails.productName}
          </p>
          <div className="flex gap-10px">
            <UserCartButton
              productId={props.cardDetails.productId}
              quantity={1}
              size={30}
            />
            <UserFavoriteButton
              productId={props.cardDetails.productId}
              size={30}
            />
          </div>
        </div>
        <p className="light-gray-font mb-2">
          {props.cardDetails.subcategoryName}
        </p>
        <StarRatingInput
          productRating={props.cardDetails.productAvgRating}
          isEditable={false}
          productRatingCount={props.cardDetails.productRatingCount}
        />
        <p className="mt-2">
          <span className="font-26px">₹{props.cardDetails.productPrice}</span>
          {"  "}
          <span className="font-20px line-through">
            ₹
            {(props.cardDetails.productPrice * 100) /
              props.cardDetails.discountPercent}
          </span>
          {"  "}
          <span className="light-green-font font-20px">
            {props.cardDetails.discountPercent}% Off
          </span>
        </p>
        <p className="light-gray-font mt-1">
          {props.cardDetails.productDescription}
        </p>
        {props.component}
      </div>
    </div>
  );
};

export default BasicProductVerticalCard;
