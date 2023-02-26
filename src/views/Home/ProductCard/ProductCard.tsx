import img from '../img/mobile.png'
import StarRatingInput from "../../User/userComponents/UserReviews/UserStarRatings";

import "./product-card.css"
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCard = (props: { productName: string, productDescription: string, productPrice: number, productRating: number }) => {
    return (

        <div className='prod-box-card'>
            {/* <Badge color="error" badgeContent={'Up to '+80+' %'}></Badge> */}
            <span className='badge'>Up to 80%</span>
            <FavoriteBorderIcon className='like-button pointer' sx={{fontSize:"30px"}}/>
            <img className='prod-box-img' src="https://m.media-amazon.com/images/I/41kg-+XWoxL._AC_SY200_.jpg" alt="product image" />

            <div className="prod-detail">

                <p className='font-semibold text-lg'>{props.productName}</p>
                <p className='text-base'>${props.productPrice}</p>
                <p><StarRatingInput
                    productRating={props.productRating}
                    isEditable={false}
                /></p>
                <button type="submit" className='card-button'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard
