import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserReviewsType } from "../../../../types/authTypes";

const loop = [1, 2, 3, 4, 5, 6, 7];

const UserReview = (props: { userReviewsList: UserReviewsType[] }) => {
  return (
    <div>
      <hr className="my-2" />
      <div className="grid gap-[10px] grid-cols-3">
        {props.userReviewsList.map((item, index) => (
          <div
            className="border-[2px] p-[15px] border-dashed"
            key={`user-review-item:${index}`}
          >
            <p className="font-medium text-[20px]">{item.productReviewMsg}</p>
            <p className="orange-font">{item.productRating}</p>
            {[1, 2, 3, 4, 5].map((item) => (
              <Star key={item} />
            ))}
            <p className="orange-font">At (Review Time)</p>
            <Link to={""} className="blue-font user-review-product-link">
              {item.productName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
