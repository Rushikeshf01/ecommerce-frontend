import "./product-category.css"
import CategoryCard from "./CategoryCard"
import { useEffect, useState } from "react"
import { HomeCategoriesType } from "../../types/authTypes"
import appClient from "../../network/AppClient"

const ProductByCategory = () => {
    const [homePageAllCategories, setHomePageAllCategories] = useState<HomeCategoriesType[]>()
    useEffect(()=>{ 
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

                    <CategoryCard categoryName={item.product_category_name} categoryDescription={item.product_category_description} key={`homeAllCategories-${index}`} /> 
               ))}
           </div>
       </div>
    )
}

export default ProductByCategory