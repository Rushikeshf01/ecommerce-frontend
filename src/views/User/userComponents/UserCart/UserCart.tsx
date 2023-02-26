import { UserCartType } from "../../../../types/authTypes";
import ProductVerticalCard from "./ProductVerticalCard";

const UserCart = (props: { userCart: UserCartType[] }) => {
  return (
    <div>
      {props.userCart.map((item, index) => (
        <ProductVerticalCard
          cardDetails={item}
          isCartCard
          key={`user-cart-card-index: ${index}`}
        />
      ))}
    </div>
  );
};

export default UserCart;
