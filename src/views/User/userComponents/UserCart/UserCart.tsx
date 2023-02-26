import { UserCartType } from "../../../../types/authTypes";
import UserCartCard from "./ProductVerticalCard";

const UserCart = (props: { userCart: UserCartType[] }) => {
  return (
    <div>
      {props.userCart.map((item, index) => (
        <UserCartCard
          cardDetails={item}
          isCartCard
          key={`user-cart-card-index: ${index}`}
        />
      ))}
    </div>
  );
};

export default UserCart;
