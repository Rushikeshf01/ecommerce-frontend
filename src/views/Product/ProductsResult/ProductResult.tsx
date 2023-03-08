import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiConstant } from "../../../constant/applicationConstant";
import appClient from "../../../network/AppClient";
import { ProductVerticleCardProps } from "../../../types/authProps";
import { capitalizeFirstLetter } from "../../../utils/jsFunctionsUtils";
import FilterCard from "./FilterCard";
import ProductList from "./ProductList";
import "./productResult.css";

const ProductResult = () => {
  const [categoryProductState, setCategoryProductState] = useState<
    ProductVerticleCardProps[]
  >([]);
  const param = useParams();

  const getProdcutsByCategory = async () => {
    const res = await appClient(
      `${ApiConstant.PRODUCT_API_PATH}?category=${capitalizeFirstLetter(
        param.category
      )}`
    );
    setCategoryProductState(res.data.products);
  };

  useEffect(() => {
    getProdcutsByCategory();
  }, [getProdcutsByCategory]);

  return (
    <div>
      <div className="prod-result">
        <FilterCard />
        <ProductList productDetailList={categoryProductState} />
      </div>
    </div>
  );
};

export default ProductResult;
