import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState } from "react";

const UserCartButton = (props: {
  isAlreadyFav?: boolean;
  className?: string;
  size?: number;
}) => {
  const [isCartButtonClicked, setIsCartButtonClicked] = useState(false);

  const handleAddIntoCart = () => {
    setIsCartButtonClicked(true);
  };

  const handleRemoveFromCart = () => {
    setIsCartButtonClicked(false);
  };
  return (
    <div>
      {isCartButtonClicked ? (
        <ShoppingCart
          onClick={handleRemoveFromCart}
          className={`${props.className} pointer`}
          sx={{ fontSize: `${props.size}px` }}
        />
      ) : (
        <ShoppingCartOutlined
          onClick={handleAddIntoCart}
          className={`${props.className} pointer`}
          sx={{ fontSize: `${props.size}px` }}
        />
      )}
    </div>
  );
};

export default UserCartButton;
