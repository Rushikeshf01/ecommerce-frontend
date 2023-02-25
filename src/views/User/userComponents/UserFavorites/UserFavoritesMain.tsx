import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  setFavorites,
} from "../../../../../store/slices/favoriteSlice";
import { RootState } from "../../../../../store/store";
import NotAvailable from "../../../../commonComponents/NotAvailable";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserFavoritesType } from "../../../../types/authTypes";
import User from "../../index";
import UserFavorite from "./UserFavorite";

const UserFavoritesMain = () => {
  const [userFavorites, setUserFavorites] = useState<UserFavoritesType[]>([]);
  const [isUserFavoritesApiCalling, setIsUserFavoritesApiCalling] =
    useState(true);
  const dataFechedRef = useRef(false);

  const favoriteStore = useSelector(
    (state: RootState) => state.favoriteReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataFechedRef.current) return;
    dataFechedRef.current = true;
    getUserFavorites();
  }, []);

  const getUserFavorites = async () => {
    appClient
      .get(ApiConstant.USER_FAVORITES_API_PATH)
      .then((res) => {
        setUserFavorites(res.data.favorites);
        setIsUserFavoritesApiCalling(false);
        dispatch(setFavorites(res.data.favorites));
      })
      .catch(() => dispatch(setFavorites([])));
  };

  return (
    <User
      component={
        <div className="w-[100%] user-profile-main-box">
          <p className="text-[30px] font-medium mb-4">
            My Favorites ({favoriteStore.length})
          </p>
          <hr className="my-2 mb-5" />
          {isUserFavoritesApiCalling ? (
            <CircularProgress color="success" size="30px" />
          ) : (
            <>
              {userFavorites.length === 0 ? (
                <NotAvailable label="Favorites" />
              ) : (
                <UserFavorite userFavorites={userFavorites} />
              )}
            </>
          )}
        </div>
      }
    />
  );
};

export default UserFavoritesMain;
