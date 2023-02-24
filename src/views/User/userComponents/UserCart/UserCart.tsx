import React from "react";
import { UserCartType } from "../../../../types/authTypes";
import UserCartCard from "./UserCartCard";

const UserCart = (props: { userCart: UserCartType[] }) => {
  return (
    <div>
      {props.userCart.map((item, index) => (
        <UserCartCard userCart={item} key={`user-cart-card-index: ${index}`} />
      ))}
    </div>
  );
};

export default UserCart;
