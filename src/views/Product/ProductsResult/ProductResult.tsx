import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../commonComponents/Header"
import { ApiConstant } from "../../../constant/applicationConstant";
import appClient from "../../../network/AppClient";
import { ProductVerticleCardProps } from "../../../types/authProps";
import { capitalizeFirstLetter } from "../../../utils/jsFunctionsUtils";
import FilterCard from "./FilterCard"
import ProductList from "./ProductList"
import "./productResult.css"
const ProductResult = () => {
    const [categoryProductState, setCategoryProductState] = useState<ProductVerticleCardProps[]>([])
    const param = useParams()

    
    useEffect(() => {
        getProdcutsByCategory();
    }, [])

    const getProdcutsByCategory = async() => {
            const res = await appClient(`${ApiConstant.PRODUCT_API_PATH}?category=${capitalizeFirstLetter(param.category)}`)
            setCategoryProductState(res.data.products)
    }
    
    return(
        <div>
            <Header/>
            <div className="prod-result">
                <FilterCard />
                <ProductList productDetailList={categoryProductState} />
            </div>
        </div>
        
    )
}

export default ProductResult