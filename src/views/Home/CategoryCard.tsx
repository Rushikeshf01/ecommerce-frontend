import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApplicationConstant } from "../../constant/applicationConstant";
import "./category-card.css"
import DevicesIcon from '@mui/icons-material/Devices';
import appClient from "../../network/AppClient";

function CategoryCard(props: {categoryId:number, categoryName: string, categoryDescription: string }) {

  const navigate = useNavigate();
  const getProductsByCategory = () => {
    navigate(`${ApplicationConstant.PRODUCT_URL_PATH}/category/${props.categoryName.toLowerCase()}`);
  }

  return (
    <div className="card flex pointer" onClick={getProductsByCategory}>
      <div className="category-logo">
        {/* <img src={img} alt="category img here" /> */}
        <DevicesIcon sx={{ fontSize: "60px" }}/>
      </div>

      <div className="flex flex-direction-column justify-content-center text-left">
        <div className="font-medium">
          {props.categoryName}
        </div>
        <div className="font-normal">
          {props.categoryDescription}
        </div>
      </div>

    </div>
  )
}

export default CategoryCard