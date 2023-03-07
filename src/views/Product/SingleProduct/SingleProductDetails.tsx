import { useState } from "react";
import AppBreadcrumps from "../../../commonComponents/AppBreadcrumps";
import { ApplicationConstant } from "../../../constant/applicationConstant";
import { SingleProductType } from "../../../types/authTypes";
import UserFavoriteButton from "../../User/userComponents/UserFavoriteButton";
import StarRatingInput from "../../User/userComponents/UserReviews/UserStarRatings";
import SingleProductQuntityInput from "./SingleProductQuntityInput";

const SingleProductDetails = (props: {
  singleProductState: SingleProductType;
}) => {
  const breadCrumpsState = [
    {
      previousText: "Home",
      previousLink: ApplicationConstant.HOME_URL_PATH,
    },
    {
      previousText: props.singleProductState.categoryName,
      previousLink: props.singleProductState.categoryName.toLowerCase(),
    },
    {
      previousText: props.singleProductState.subcategoryName,
      previousLink: props.singleProductState.subcategoryName.toLowerCase(),
    },
  ];

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
        currentData={props.singleProductState.productName}
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
          <div className="flex align-items-center gap-10px mb-2">
            <p className="text-[28px] font-semibold">
              {props.singleProductState.productName}
            </p>
            <UserFavoriteButton
              size={36}
              productId={props.singleProductState.productId}
            />
          </div>
          <StarRatingInput
            productRating={props.singleProductState.productAvgRating}
            productRatingCount={props.singleProductState.productRatingCount}
            isEditable={false}
          />
          <p className="text-[20px] my-3">
            ${props.singleProductState.productPrice}
          </p>
          <SingleProductQuntityInput
            singleProductState={props.singleProductState}
          />
          <p>Left in stock: {props.singleProductState.inventoryQuantity}</p>
          <p>
            Category: {props.singleProductState.categoryName} -{" "}
            {props.singleProductState.subcategoryName}{" "}
          </p>
          <p>{props.singleProductState.productDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
