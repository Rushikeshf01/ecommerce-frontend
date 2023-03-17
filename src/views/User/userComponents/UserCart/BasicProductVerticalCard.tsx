import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationConstant } from "../../../../constant/applicationConstant";
import { ProductVerticleCardProps } from "../../../../types/authProps";
import UserCartButton from "../UserCartButton";
import UserDeleteButton from "../UserDeleteButton";
import UserFavoriteButton from "../UserFavoriteButton";
import StarRatingInput from "../UserReviews/UserStarRatings";

const BasicProductVerticalCard = (props: {
  component?: React.ReactNode;
  cardDetails: ProductVerticleCardProps;
  isCartIconShow: boolean;
  isFavoriteIconShow: boolean;
}) => {
  const navigate = useNavigate();
  const handleViewSingleProduct = (id: number) => {
    navigate(`${ApplicationConstant.PRODUCT_URL_PATH}/${id}`);
  };

  return (
    <div className="product-vertical-card-main-box">
      <div className="flex justify-content-center">
        <img
          src="https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg"
          alt="Product Img"
          width={props.component ? 260 : 230}
          className="pointer product-vertical-card-img"
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
          <div className="flex align-items-center gap-6px">
            {props.isCartIconShow && (
              <UserCartButton
                productId={props.cardDetails.productId}
                quantity={1}
                size={30}
              />
            )}
            {props.isFavoriteIconShow && (
              <UserFavoriteButton
                productId={props.cardDetails.productId}
                size={30}
              />
            )}
            <UserDeleteButton
              cartId={props.cardDetails.cartId}
              favoriteId={props.cardDetails.userFavoriteId}
              toolTipTitle={
                props.component ? "Remove from cart" : "Remove from favorite"
              }
              component={props.component}
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
          <span className="font-26px">
            ₹{props.cardDetails.productPrice.toFixed(2)}
          </span>
          {"  "}
          <span className="font-20px line-through">
            ₹
            {(
              (props.cardDetails.productPrice * 100) /
              props.cardDetails.discountPercent
            ).toFixed(2)}
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
