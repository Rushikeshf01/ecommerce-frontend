import Header from "../../../commonComponents/Header";
import SingleProductDetails from "./SingleProductDetails";
import "./singleProduct.css";
import SingleProductDescription from "./SingleProductDescription";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import appClient from "../../../network/AppClient";
import {
  ApiConstant,
  ApplicationConstant,
} from "../../../constant/applicationConstant";
import {
  SingleProductReviewType,
  SingleProductType,
} from "../../../types/authTypes";
import { CircularProgress } from "@mui/material";

export const singleProductInitialState = {
  categoryDescription: "",
  categoryId: 0,
  categoryName: "",
  discountId: 0,
  discountName: "",
  discountPercent: 0,
  inventoryId: 0,
  inventoryQuantity: 0,
  productAvgRating: 0,
  productDescription: "",
  productId: 0,
  productName: "",
  productPrice: 0,
  productRatingCount: 0,
  subcategoryDescription: "",
  subcategoryId: 0,
  subcategoryName: "",
  isFavorite: true,
};

const SingleProductMain = () => {
  const [singleProductState, setSingleProductState] =
    useState<SingleProductType>(singleProductInitialState);
  const [singleProductReviewsState, setSingleProductReviewsState] = useState<
    SingleProductReviewType[]
  >([]);
  const [isSingleProductApiCalling, setIsSingleProductApiCalling] =
    useState<boolean>(true);

  const param = useParams();
  const dataRef = useRef(false);

  useEffect(() => {
    if (dataRef.current) return;
    dataRef.current = true;
    getSingleProductAndReviews();
  }, []);

  const getSingleProductAndReviews = async () => {
    getSingleProduct();
    getSingleProductReviews();
  };

  const getSingleProduct = async () => {
    const res = await appClient.get(
      `${ApiConstant.PRODUCT_API_PATH}/${param.id}`
    );
    setSingleProductState(res.data);
    setIsSingleProductApiCalling(false);
  };

  const getSingleProductReviews = async () => {
    const res = await appClient.get(
      `${ApiConstant.PRODUCT_API_PATH}/reviews/${param.id}`
    );
    setSingleProductReviewsState(res.data.reviews);
  };

  return (
    <div>
      {isSingleProductApiCalling ? (
        <div className="height-60 flex align-items-center justify-content-center">
          <CircularProgress size="30px" />
        </div>
      ) : (
        <>
          <SingleProductDetails singleProductState={singleProductState} />
          <SingleProductDescription
            singleProductState={singleProductState}
            singleProductReviewsState={singleProductReviewsState}
          />
        </>
      )}
    </div>
  );
};

export default SingleProductMain;
