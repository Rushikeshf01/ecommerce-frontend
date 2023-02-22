import React, { useState } from "react";
import AppBreadcrumps from "../../../commonComponents/AppBreadcrumps";
import StarRatingInput from "../../User/userComponents/UserReviews/UserStarRatings";
import SingleProductQuntityInput from "./SingleProductQuntityInput";

const SingleProductDetails = () => {
  const [breadCrumpsState, setbreadCrumpsState] = useState([
    {
      previousText: "strin",
      previousLink: "string",
    },
  ]);

  const imgOptions = [
    "https://m.media-amazon.com/images/I/81DZlX8YdwS._UX569_.jpg",
    "https://m.media-amazon.com/images/I/71HItc7YBGS._UX569_.jpg",
    "https://m.media-amazon.com/images/I/81NMRZ0nPbS._UX569_.jpg",
    "https://m.media-amazon.com/images/I/91hcE6rv-1S._UX569_.jpg",
    "https://m.media-amazon.com/images/I/61b3c6ORgyS._UX569_.jpg",
    "https://m.media-amazon.com/images/I/A1dfalXI5yS._UX569_.jpg",
  ];

  const [imgOption, setimgOption] = useState(imgOptions[0]);

  const handleImgOptionChange = (src: string) => {
    setimgOption(src);
  };

  return (
    <div className="single-product-main">
      <AppBreadcrumps
        previousData={breadCrumpsState}
        currentData={"dynamic name"}
        className="margin-top-5"
      />
      <div className="single-product-first-box">
        <div className="single-product-img-box">
          <div>
            {imgOptions.map((item, index) => (
              <img
                className="single-product-img-sidebar"
                src={item}
                alt="Options"
                onClick={() => handleImgOptionChange(item)}
                key={`single-product-img-section: ${index}`}
              />
            ))}
          </div>
          <img className="single-product-img" src={imgOption} alt="Image" />
        </div>
        <div>
          <p className="text-[28px] font-semibold mb-2">Product Name</p>
          <StarRatingInput productRating={4} isEditable={false} />
          <p className="text-[20px] my-3">Price</p>
          <div>
            <SingleProductQuntityInput />
            <p>Add to Favorite</p>
            <p>Add to Cart</p>
          </div>
          <p>Left in stock: quntity</p>
          <p>Category: categoryName - subcategoryName </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;