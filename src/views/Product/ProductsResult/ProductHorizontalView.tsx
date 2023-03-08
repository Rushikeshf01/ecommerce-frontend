import StarRatingInput from "../../User/userComponents/UserReviews/UserStarRatings";

const ProductHorizontalView = () => {
    return (
        <div className="prod-h-card">
            <img className='prod-h-img' src="https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg" alt="product image" />
            <div className="prod-h-detail">
            <p className='font-semibold text-lg'>Dopamine Detox</p>
            <p className='font-thin'> subcategory</p>
            <p><StarRatingInput
                    productRating={4.5}
                    productRatingCount={3}
                    isEditable={false}
                /></p>
                <p className='text-base'>50$</p>
            <p>product Description cusandae?</p>
            </div>
        </div>
    )
}

export default ProductHorizontalView