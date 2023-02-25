import { CircularProgress } from "@mui/material";
import { useState } from "react";
import NotAvailable from "../../../../commonComponents/NotAvailable";
import User from "../../index";

const UserCartMain = () => {
  const [isUserCartApiCalling, setIsUserCartApiCalling] = useState(true);
  const [userCart, setUserCart] = useState([]);

  return (
    <User
      component={
        <div className="w-[100%] user-profile-main-box">
          <p className="text-[30px] font-medium mb-4">My Cart</p>
          <hr className="my-2 mb-5" />
          {isUserCartApiCalling ? (
            <CircularProgress color="success" size="30px" />
          ) : (
            <>
              {userCart.length === 0 ? <NotAvailable label="Cart items" /> : <></>}
            </>
          )}
        </div>
      }
    />
  );
};

export default UserCartMain;
