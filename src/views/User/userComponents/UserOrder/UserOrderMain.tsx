import User from "../../index";

const UserOrderMain = () => {
  return (
    <User
      component={
        <div className="w-[100%] user-profile-main-box">
          <p className="text-[30px] font-medium mb-4">My Orders</p>
        </div>
      }
    />
  );
};

export default UserOrderMain;
