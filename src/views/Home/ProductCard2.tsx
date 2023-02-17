import img from '../img/mobile.png'
import "./product-card.css"

const ProductCard2 = (props: { productName: string, productDescription: string, productPrice:number, productRating:number}) => {
  return (
      <div className='prod-card'>
          <img src={img} alt="product image" />

            <div className="prod-detail">

            <p className='font-semibold text-2xl'>{props.productName}</p>
            <p className='text-lg'>${props.productPrice}</p>
            <p>{props.productRating}</p>
            <button type="submit" className='card-button'>Add to cart</button>
            </div>
      </div>
  )
}

export default ProductCard2
