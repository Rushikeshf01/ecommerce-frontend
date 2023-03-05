import React, { useState } from "react";
import {
  SingleProductReviewType,
  SingleProductType,
} from "../../../types/authTypes";
import SingleProductReviewCard from "./SingleProductReviewCard";

const SingleProductDescription = (props: {
  singleProductState: SingleProductType;
  singleProductReviewsState: SingleProductReviewType[];
}) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleIsToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="single-product-desc-main">
      {isToggle ? (
        <>
          <div
            onClick={handleIsToggle}
            className="single-product-desc-main-box"
          >
            <p className="single-product-second-box-text">Description</p>
            <p className="single-product-second-box-text single-product-second-box-text-active">
              Reviews({props.singleProductReviewsState.length})
            </p>
          </div>
          <div>
            {props.singleProductReviewsState.map((item, index) => (
              <SingleProductReviewCard
                reviewData={item}
                key={`single-product-review-card: ${index}`}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            onClick={handleIsToggle}
            className="single-product-desc-main-box"
          >
            <p className="single-product-second-box-text single-product-second-box-text-active">
              Description
            </p>
            <p className="single-product-second-box-text">
              Reviews({props.singleProductReviewsState.length})
            </p>
          </div>
          <div>
            <p>{props.singleProductState.productDescription}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProductDescription;
