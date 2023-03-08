import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AppBreadcrumps from "../../../commonComponents/AppBreadcrumps";
import { ApplicationConstant } from "../../../constant/applicationConstant";
import { ProductVerticleCardProps } from "../../../types/authProps";
import { capitalizeFirstLetter } from "../../../utils/jsFunctionsUtils";
import ProductVerticalCard from "../../User/userComponents/UserCart/ProductVerticalCard";
import ProductHorizontalView from "./ProductHorizontalView"

const breadCrumpsState = [
    {
        previousText: "Home",
        previousLink: ApplicationConstant.HOME_URL_PATH,
    },
]
const ProductList = (props: { productDetailList: ProductVerticleCardProps[]}) => {
    const param = useParams()
    const categoryName = param.category? param.category: ''
    return (
        <div className="items">
            <AppBreadcrumps
                previousData={breadCrumpsState}
                currentData={categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                className="margin-top-5"
            />
            {props.productDetailList.map((item, index) => (
                <ProductVerticalCard key={`category-productList-item-${index}`} cardDetails={item} isCartCard />
            ))}
        </div>
    )
}

export default ProductList