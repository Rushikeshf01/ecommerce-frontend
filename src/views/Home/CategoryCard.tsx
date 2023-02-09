import React from 'react'
import "./category-card.css"
import img from '../img/elec.png'

function CategoryCard() {
  return (
    <div className="card">

    <div className="category-logo">
        <img src={img} alt="category img here" />
    </div>

    <div className="category-detail">
      <div className="category-name">
        Electronics
      </div>
      <div className="category-desc">
          All Electronics devices and more..
      </div>
    </div>

    </div>
  )
}

export default CategoryCard