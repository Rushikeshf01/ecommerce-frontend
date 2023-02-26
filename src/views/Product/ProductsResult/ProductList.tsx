import React, { useState } from "react";
import AppBreadcrumps from "../../../commonComponents/AppBreadcrumps";
import ProductHorizontalView from "./ProductHorizontalView"

const ProductList = () => {
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
            <ProductHorizontalView />
            <ProductHorizontalView />
            <ProductHorizontalView />
        </div>
    )
}

export default ProductList