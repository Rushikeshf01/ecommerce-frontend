import { UserFavoritesType } from "../../../../types/authTypes";
import ProductVerticalCard from "../UserCart/ProductVerticalCard";

const UserFavorite = (props: { userFavorites: UserFavoritesType[] }) => {
  return (
    <div>
      {props.userFavorites.map((item, index) => (
        <ProductVerticalCard
          cardDetails={item}
          isCartIconShow
          isFavoriteIconShow={false}
          key={`user-favorite-card-index: ${index}`}
        />
      ))}
    </div>
  );
};

export default UserFavorite;
