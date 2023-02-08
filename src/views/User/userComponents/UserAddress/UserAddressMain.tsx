import { CircularProgress } from "@mui/material";
import react, { useEffect, useState } from "react";
import appClient from "../../../../network/AppClient";
import { UserAddressesType } from "../../../../types/authTypes";
import User from "../../index";
import UserAddresses from "./UserAddresses";

const UserAddressMain = () => {
  const [userAddresses, setUserAddresses] = useState<UserAddressesType[]>([]);
  const [isApiCalling, setIsApiCalling] = useState<boolean>(true);

  useEffect(() => {
    getUserAddresses();
  }, []);

  const getUserAddresses = () => {
    appClient.get(`/a2/addresses`).then((res) => {
      setIsApiCalling(false);
      setUserAddresses(res.data.addresses);
    });
  };

  return (
    <div>
      <User
        component={
          <div className="w-[100%] user-profile-main-box">
            <p className="text-[30px] font-medium mb-4">My Addresses</p>
            {isApiCalling ? (
              <CircularProgress color="success" size="30px" />
            ) : (
              <UserAddresses
                userAddresses={userAddresses}
                setUserAddresses={setUserAddresses}
              />
            )}
          </div>
        }
      />
    </div>
  );
};

export default UserAddressMain;
