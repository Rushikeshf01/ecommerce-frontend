import React, { useState } from "react";

const SingleProductDescription = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleIsToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="single-product-desc-main">
      {isToggle ? (
        <>
          <div onClick={handleIsToggle} className="single-product-desc-main-box">
            <p className="single-product-second-box-text">Description</p>
            <p className="single-product-second-box-text single-product-second-box-text-active">
              Reviews(count)
            </p>
          </div>
          <div>
            <p>Product Reviews</p>
          </div>
        </>
      ) : (
        <>
          <div onClick={handleIsToggle} className="single-product-desc-main-box">
            <p className="single-product-second-box-text single-product-second-box-text-active">
              Description
            </p>
            <p className="single-product-second-box-text">Reviews(count)</p>
          </div>
          <div>
            <p>Product Description</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProductDescription;
