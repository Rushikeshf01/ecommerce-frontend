import React, { useState } from "react";
import AppBreadcrumps from "../../../commonComponents/AppBreadcrumps";
import { ProductVerticleCardProps } from "../../../types/authProps";
import ProductVerticalCard from "../../User/userComponents/UserCart/ProductVerticalCard";
import ProductHorizontalView from "./ProductHorizontalView"

const ProductList = (props: { productDetailList: ProductVerticleCardProps[] }) => {
    const [breadCrumpsState, setbreadCrumpsState] = useState([
        {
            previousText: "home",
            previousLink: "home",
        },
        {
            previousText: "categoryName",
            previousLink: "category",
        },
    ]);

    return (
        <div className="items">
            <AppBreadcrumps
                previousData={breadCrumpsState}
                currentData={"productName"}
                className="margin-top-5"
            />
            {/* <ProductHorizontalView />
            <ProductHorizontalView />
            <ProductHorizontalView /> */}
            <>
                {props.productDetailList.map((item, index) => {

                    <ProductVerticalCard key={`category-productList-item-${index}`} cardDetails={item} isFavoriteIconShow isCartIconShow />
                })}
            </>
        </div>
    )
}

export default ProductList