import React from 'react'
import "./category-card.css"
import img from '../img/elec.png'
import DevicesIcon from '@mui/icons-material/Devices';

function CategoryCard(props: { categoryName: string, categoryDescription: string }) {
  return (
    <div className="card flex pointer">
      <div className="category-logo">
        {/* <img src={img} alt="category img here" /> */}
        <DevicesIcon sx={{ fontSize: "60px" }}/>
      </div>

      <div className="flex flex-direction-column justify-content-center text-left">
      {/* <div className="category-detail"> */}
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