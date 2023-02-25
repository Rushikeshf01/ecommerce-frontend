import { useNavigate } from "react-router-dom";
import { ApplicationConstant } from "../../../../constant/applicationConstant";
import { ProductVerticleCardProps } from "../../../../types/authProps";
import { UserCartType } from "../../../../types/authTypes";
import UserCartButton from "../UserCartButton";
import UserFavoriteButton from "../UserFavoriteButton";
import StarRatingInput from "../UserReviews/UserStarRatings";

const ProductVerticalCard = (props: {
  cardDetails: ProductVerticleCardProps;
  isFavoriteIconShow: boolean;
  isCartIconShow: boolean;
}) => {
  const navigate = useNavigate();
  const handleViewSingleProduct = (id: number) => {
    navigate(`${ApplicationConstant.PRODUCT_URL_PATH}/${id}`);
  };

  return (
    <div className="user-cart-main-box">
      <div>
        <img
          src=""
          alt="Product Img"
          className="pointer"
          onClick={() => handleViewSingleProduct(props.cardDetails.productId)}
        />
      </div>
      <div>
        <div className="flex align-items-center justify-content-space-between">
          <p
            className="text-[20px] font-semibold pointer"
            onClick={() => handleViewSingleProduct(props.cardDetails.productId)}
          >
            {props.cardDetails.productName}
          </p>
          <div className="flex gap-10px">
            {props.isCartIconShow && (
              <UserCartButton
                productId={props.cardDetails.productId}
                quantity={1}
                size={30}
              />
            )}
            {props.isFavoriteIconShow && (
              <UserFavoriteButton
                productId={props.cardDetails.productId}
                size={30}
              />
            )}
          </div>
        </div>
        <p className="light-gray-font">{props.cardDetails.subcategoryName}</p>
        <StarRatingInput
          productRating={props.cardDetails.productAvgRating}
          isEditable={false}
          productRatingCount={props.cardDetails.productRatingCount}
        />
        <p>
          <span className="font-26px">₹{props.cardDetails.productPrice}</span>
          {"  "}
          <span className="font-20px line-through">
            ₹
            {(props.cardDetails.productPrice * 100) /
              props.cardDetails.discountPercent}
          </span>
          {"  "}
          <span className="light-green-font font-20px">
            {props.cardDetails.discountPercent}% Off
          </span>
        </p>
        <p className="light-gray-font">
          {props.cardDetails.productDescription}
        </p>
      </div>
    </div>
  );
};

export default ProductVerticalCard;
