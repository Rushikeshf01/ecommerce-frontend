import { Favorite, FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorites } from "../../../../store/slices/favoriteSlice";
import {
  ApiConstant,
  ApplicationConstant,
} from "../../../constant/applicationConstant";
import appClient from "../../../network/AppClient";
import { UserFavoritesType } from "../../../types/authTypes";
import { ToastSuccessMessage } from "../../../utils/toastMessages";

const UserFavoriteButton = (props: {
  isAlreadyFav?: boolean;
  className?: string;
  size?: number;
  productId: number;
}) => {
  const [isFavoriteButtonClicked, setIsFavoriteButtonClicked] = useState(false);
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    appClient
      .post(ApiConstant.USER_FAVORITES_API_PATH, {
        productId: props.productId,
      })
      .then((res) => {
        setIsFavoriteButtonClicked(true);
        dispatch(addFavorites(res.data.favorite));
        ToastSuccessMessage("Product added in favorites");
      });
  };

  const handleRemoveFavorite = () => {
    setIsFavoriteButtonClicked(false);
  };

  return (
    <div>
      {isFavoriteButtonClicked ? (
        <Favorite
          onDoubleClick={handleRemoveFavorite}
          className={`${props.className} pointer`}
          sx={{ fontSize: `${props.size}px` }}
        />
      ) : (
        <FavoriteBorder
          onDoubleClick={handleAddFavorite}
          className={`${props.className} pointer`}
          sx={{ fontSize: `${props.size}px` }}
        />
      )}
    </div>
  );
};

export default UserFavoriteButton;
