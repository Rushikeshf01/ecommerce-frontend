import React from 'react'
import "./top-products.css"
import { useState,useEffect,useRef } from "react"
import ProductCard from "./ProductCard"
import { TopProductType } from "../../types/authTypes"
import appClient from '../../network/AppClient'


const TopProducts = () => {

  const [topProduct, setTopProduct] = useState<TopProductType[]> ()
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getTopProducts()
  }, [])
  
  const getTopProducts = async () => {
    const res = await appClient.get('/a3/products/get-top-products?category=Electronics')
    setTopProduct(res.data.products)
  }
  return (
    <div className='top-card-container'>

      {/* we have to show here top 4 products of 3 categories
      and that categories 3 categories will be decided by the 
      number of order recived by the each category
      i.e. top 3 category with highest sales */}
      

      <p className="text-[28px] font-semibold blue-font">Our Top Products from Electronics</p>
      <div className="product-cards">

        {topProduct?.map((item,index) => (
          <ProductCard productName={item.productName} productDescription={item.productDescription} key={`topProduct-${index}`}/>
        ))}
      </div>
    </div>
  )
}

export default TopProducts
