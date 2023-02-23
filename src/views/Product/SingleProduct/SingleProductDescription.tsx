import React, { useState } from "react";
import { SingleProductType } from "../../../types/authTypes";

const SingleProductDescription = (props: {
  singleProductState: SingleProductType;
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
              Reviews({props.singleProductState.productRatingCount})
            </p>
          </div>
          <div>
            <p>Product Reviews</p>
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
              Reviews({props.singleProductState.productRatingCount})
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
