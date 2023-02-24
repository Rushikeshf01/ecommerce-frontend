import { Favorite, FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";

const UserFavoriteButton = (props: {
  isAlreadyFav?: boolean;
  className?: string;
  size?: number;
}) => {
  const [isFavoriteButtonClicked, setIsFavoriteButtonClicked] = useState(false);

  const handleAddFavorite = () => {
    setIsFavoriteButtonClicked(true);
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
