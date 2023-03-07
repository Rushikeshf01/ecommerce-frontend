import StarRatingInput from "../../User/userComponents/UserReviews/UserStarRatings";
import "./product-card.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCard = (props: { productName: string, productDescription: string, productPrice: number, productRating: number,productRatingCount:number }) => {
    return (

        <div className='prod-box-card border-light-gray'>
            <div className="flex align-item-center justify-content-space-between">

            <span className='badge'>Up to 80%</span>
            <FavoriteBorderIcon className='pointer' sx={{fontSize:"30px", marginRight:"10px"}}/>
            </div>


            <div className="prod-detail">
            <img className='prod-box-img' src="https://m.media-amazon.com/images/I/41kg-+XWoxL._AC_SY200_.jpg" alt="product image" />

                <p className='font-semibold text-lg'>{props.productName}</p>
                <p className='text-base'>${props.productPrice}</p>
                <p><StarRatingInput
                    productRating={props.productRating}
                    productRatingCount={props.productRatingCount}
                    isEditable={false}
                /></p>
                <button type="submit" className='card-button'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard
