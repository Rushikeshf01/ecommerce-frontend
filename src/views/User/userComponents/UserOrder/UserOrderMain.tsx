import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import NotAvailable from "../../../../commonComponents/NotAvailable";
import { UserOrdersType } from "../../../../types/authTypes";
import User from "../../index";

const UserOrderMain = () => {
  const [userOrders, setUserOrders] = useState<UserOrdersType[]>([]);
  const [isUserOrdersApiCalling, setIsUserOrdersApiCalling] = useState(true);
  const dataFechedRef = useRef(false);

  useEffect(() => {
    if (dataFechedRef.current) return;
    dataFechedRef.current = true;
    getUserOrders();
  }, []);

  const getUserOrders = async () => {};
  return (
    <User
      component={
        <div className="w-[100%] user-profile-main-box">
          <p className="text-[30px] font-medium mb-4">My Orders</p>
          <hr className="my-2 mb-5" />
          {isUserOrdersApiCalling ? (
            <CircularProgress color="success" size="30px" />
          ) : (
            <>
              {userOrders.length === 0 ? (
                <NotAvailable label="Orders" />
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      }
    />
  );
};

export default UserOrderMain;
