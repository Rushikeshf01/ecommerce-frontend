import { Button, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ApiConstant } from "../../../../constant/applicationConstant";
import appClient from "../../../../network/AppClient";
import { UserAddressesType } from "../../../../types/authTypes";
import User from "../../index";
import UserAddresses from "./UserAddresses";

const UserAddressMain = () => {
  const [userAddresses, setUserAddresses] = useState<UserAddressesType[]>([]);
  const [isApiCalling, setIsApiCalling] = useState<boolean>(true);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getUserAddresses();
  }, []);

  const getUserAddresses = () => {
    appClient
      .get(ApiConstant.USER_ADDRESS_API_PATH)
      .then((res) => {
        setIsApiCalling(false);
        setUserAddresses(res.data.addresses);
      })
      .catch(() => setIsApiCalling(false));
  };

  return (
    <div>
      <User
        component={
          <div className="w-[100%] user-profile-main-box">
            <p className="text-[30px] font-medium mb-4">My Addresses</p>
            <hr className="my-2 mb-5" />
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
