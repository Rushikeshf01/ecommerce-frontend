import react, { useEffect, useState } from "react";
import appClient from "../../../network/AppClient";
import { UserAddressesType } from "../../../types/authTypes";
import User from "../index";
import UserAddresses from "./UserAddresses";

const UserAddressMain = () => {
  const [userAddresses, setUserAddresses] = useState<UserAddressesType[]>([]);

  useEffect(() => {
    getUserAddresses();
  }, []);

  const getUserAddresses = async () => {
    const res = await appClient.get(`/a2/addresses`);
    setUserAddresses(res.data.addresses);
  };

  return (
    <div>
      <User
        component={
          <div className="w-[100%] user-profile-main-box">
            <p className="text-[30px] font-medium mb-4">My addresses</p>
            <UserAddresses
              userAddresses={userAddresses}
              setUserAddresses={setUserAddresses}
            />
          </div>
        }
      />
    </div>
  );
};

export default UserAddressMain;
