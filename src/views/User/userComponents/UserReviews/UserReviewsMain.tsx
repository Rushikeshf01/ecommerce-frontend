import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import NotAvailable from "../../../../commonComponents/NotAvailable";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserReviewsType } from "../../../../types/authTypes";
import User from "../../index";
import UserReview from "./UserReview";
import StarRating from "./UserStarRatings";

const UserReviewsMain = () => {
  const [userReviewsList, setUserReviewsList] = useState<UserReviewsType[]>([]);
  const [isUserReviewApiCalling, setIsUserReviewApiCalling] = useState(true);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getUserReviews();
  }, []);

  const getUserReviews = async () => {
    appClient
      .get(ApiConstant.USER_REVIEWS_API_PATH)
      .then((res) => {
        setUserReviewsList(res.data.reviews);
        setIsUserReviewApiCalling(false);
      })
      .catch(() => setIsUserReviewApiCalling(false));
  };

  return (
    <User
      component={
        <div className="w-[100%] user-profile-main-box">
          <p className="text-[30px] font-medium mb-4">My Reviews</p>
          {isUserReviewApiCalling ? (
            <CircularProgress color="success" size="30px" />
          ) : (
            <>
              {userReviewsList.length === 0 ? (
                <NotAvailable label="Reviews" />
              ) : (
                <UserReview userReviewsList={userReviewsList} />
              )}
            </>
          )}
          <StarRating />
        </div>
      }
    />
  );
};

export default UserReviewsMain;
