import StarRatingInput from "../User/userComponents/UserReviews/UserStarRatings";

import "./product-card.css"
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCard2 = (props: { productName: string, productDescription: string, productPrice: number, productRating: number }) => {
    return (

        <div className='prod-card'>
            {/* <Badge color="error" badgeContent={'Up to '+80+' %'}></Badge> */}
            <span className='badge'>Up to 80%</span>
            <FavoriteBorderIcon className='like-button pointer' sx={{fontSize:"30px"}}/>
            <img src="" alt="product image" />

            <div className="prod-detail">

                <p className='font-semibold text-2xl'>{props.productName}</p>
                <p className='text-lg'>${props.productPrice}</p>
                <p><StarRatingInput
                    productRating={props.productRating}
                    isEditable={false}
                /></p>
                <button type="submit" className='card-button'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard2
