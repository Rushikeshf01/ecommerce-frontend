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
import { SingleProductType } from "../../../types/authTypes";

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
  const param = useParams();
  const dataRef = useRef(false);

  useEffect(() => {
    if (dataRef.current) return;
    dataRef.current = true;
    getSinglePartnerProfile();
  }, []);

  const getSinglePartnerProfile = async () => {
    appClient.get(`${ApiConstant.PRODUCT_API_PATH}/${param.id}`).then((res) => {
      setSingleProductState(res.data);
    });
  };

  return (
    <div>
      <Header />
      <SingleProductDetails singleProductState={singleProductState} />
      <SingleProductDescription singleProductState={singleProductState} />
    </div>
  );
};

export default SingleProductMain;
