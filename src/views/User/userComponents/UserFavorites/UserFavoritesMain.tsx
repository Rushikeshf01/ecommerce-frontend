import User from "../../index";

const UserFavoritesMain = () => {
  return (
    <User
      component={
        <div className="w-[100%] user-profile-main-box">
          <p className="text-[30px] font-medium mb-4">My Favorites</p>
        </div>
      }
    />
  );
};

export default UserFavoritesMain;
