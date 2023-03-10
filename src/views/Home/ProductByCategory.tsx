import "./product-category.css"
import CategoryCard from "./CategoryCard"
import {useEffect, useState,useRef } from "react"
import { HomeCategoriesType } from "../../types/authTypes"
import appClient from "../../network/AppClient"
import React from "react";
import { ApplicationConstant } from "../../constant/applicationConstant"

const ProductByCategory = () => {
    const [homePageAllCategories, setHomePageAllCategories] = useState<HomeCategoriesType[]>()
    const dataFetchedRef = useRef(false);
    useEffect(()=>{ 
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        getAllcategory()
    },[])

    const getAllcategory = async () => {
        const res = await appClient.get('/a3/products/categories')
        setHomePageAllCategories(res.data.categories)
    }
    
    return (
       <div className="category-container">
           <p className="text-[28px] font-semibold blue-font">Choose by Category</p>
           <div className="category-cards grid">
               {homePageAllCategories?.map((item, index) => (
                    <CategoryCard categoryId={item.categoryId} categoryName={item.categoryName} categoryDescription={item.categoryDescription} key={`homeAllCategories-${index}`} /> 
               ))}
           </div>
       </div>
    )
}

export default ProductByCategory