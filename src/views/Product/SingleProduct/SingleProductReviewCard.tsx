import { SingleProductReviewType } from "../../../types/authTypes";
import StarRatingInput from "../../User/userComponents/UserReviews/UserStarRatings";

const SingleProductReviewCard = (props: {
  reviewData: SingleProductReviewType;
}) => {
  return (
    <div className="single-product-review-card-main border-light-gray">
      <div className="flex align-items-center">
        <img src={props.reviewData.profilePic} alt="Profile" />
        <p className="font-22px weight-500">{`${props.reviewData.firstName} ${props.reviewData.lastName}`}</p>
      </div>
      <p className="font-20px mx-4">{props.reviewData.reviewMsg}</p>
      <StarRatingInput
        productRating={props.reviewData.reviewRating}
        isEditable={false}
      />
      <p>{`${props.reviewData.updatedAt.slice(0,16)}`}</p>
    </div>
  );
};

export default SingleProductReviewCard;
