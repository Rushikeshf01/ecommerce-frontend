import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserReviewsType } from "../../../../types/authTypes";
import StarRatingInput from "./UserStarRatings";

const UserReview = (props: { userReviewsList: UserReviewsType[] }) => {
  return (
    <div>
      <div className="grid gap-[10px] grid-cols-3">
        {props.userReviewsList.map((item, index) => (
          <div
            className="border-[1px] border-radius-4px p-[15px]"
            key={`user-review-item:${index}`}
          >
            <p className="font-medium text-[20px]">{item.reviewMsg}</p>
            <StarRatingInput
              productRating={item.reviewRating}
              isEditable={false}
              productRatingCount={item.productRatingCount}
            />
            <p className="orange-font text-[14px] my-1">{`(${item.updatedAt})`}</p>
            <Link
              to={`${item.productId}`}
              className="blue-font user-review-product-link"
            >
              {item.productName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
