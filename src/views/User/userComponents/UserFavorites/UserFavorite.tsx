import { UserFavoritesType } from "../../../../types/authTypes";

const UserFavorite = (props: { userFavorites: UserFavoritesType[] }) => {
  return <div>{props.userFavorites.length}</div>;
};

export default UserFavorite;
