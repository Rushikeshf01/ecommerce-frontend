import { CircularProgress } from "@mui/material";
import { useState } from "react";
import NotAvailable from "../../../../commonComponents/NotAvailable";
import { UserFavoritesType } from "../../../../types/authTypes";
import User from "../../index";

const UserFavoritesMain = () => {
  const [userFavorites, setUserFavorites] = useState<UserFavoritesType[]>([]);
  const [isUserFavoritesApiCalling, setIsUserFavoritesApiCalling] =
    useState(true);

  return (
    <User
      component={
        <div className="w-[100%] user-profile-main-box">
          <p className="text-[30px] font-medium mb-4">My Favorites</p>
          <hr className="my-2 mb-5" />
          {isUserFavoritesApiCalling ? (
            <CircularProgress color="success" size="30px" />
          ) : (
            <>
              {userFavorites.length === 0 ? (
                <NotAvailable label="Favorites" />
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      }
    />
  );
};

export default UserFavoritesMain;
