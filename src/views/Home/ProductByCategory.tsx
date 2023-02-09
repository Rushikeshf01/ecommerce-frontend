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
        console.log(res);
        
        // setHomePageAllCategories(res.data)
    }
    return (
       <div className="category-container">
           <h2>Choose by Category</h2>
           <div className="category-cards">
               <div><CategoryCard /></div> 
               <div><CategoryCard /></div> 
               <div><CategoryCard /></div> 
               <div><CategoryCard /></div>
               <div><CategoryCard /></div>
               <div><CategoryCard /></div>
           </div>
       </div>
    )
}

export default ProductByCategory