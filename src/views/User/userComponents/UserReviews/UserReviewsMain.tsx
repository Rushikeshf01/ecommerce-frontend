import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import NotAvailable from "../../../../commonComponents/NotAvailable";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserReviewsType } from "../../../../types/authTypes";
import User from "../../index";
import UserReview from "./UserReview";

const UserReviewsMain = () => {
  const [userReviewsList, setUserReviewsList] = useState<UserReviewsType[]>([]);
  const [isUserReviewApiCalling, setIsUserReviewApiCalling] = useState(true);
  useEffect(() => {
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
        </div>
      }
    />
  );
};

export default UserReviewsMain;
